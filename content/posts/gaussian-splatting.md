---
title: "Gaussian Splatting"
layout: single
description: "Fast 3D reconstruction"
sitemap: true
date: 2023-09-09
draft: false
tags: 
- machine-learning
- calculus
- linear-algebra
libraries:
- katex
---


# Introduction

Gaussian Splatting is a recent method [] for 3D reconstruction. In this post we will dig into the implementation details of the method and the theory behind it.



The high level idea behind this method is to use 3D gaussians as a graphical primative for representing a scene. To be clear this isn't a new idea, it has been used in computer graphics previously.

These gaussians each have an opacity value, spherical harmonic coeffficents for colour, a 3d covariance and a 3d position. When rendering the scene we can "splat" these gaussians onto the 2D screen and then use traditional rasterisation techniques to render the scene.

# Splatting

You might be aware that if you integrate a N dimensional gaussian over a dimension, you get an N-1 dimensional gaussian. This approach would enable us to get fully acccurate 2d splats if we were doing orthographic projection. However, we are doing perspective projection, so we need to approximate in some way to make this work.

This paper [] is the basis for what the gaussian splatting paper uses to try and do this. The high level idea is as follows:
- If we have an affine transformation, we can exactly project a 3D gaussian onto a 2D gaussian.
- We decompose the perspective projection into 2 transformations, world space to camera space and camera space to screen space.
- The world space to camera space transformation is affine.
- The camera space to screen space transformation is not, so we approximate it by taylor expanding it about the gaussian mean.

The paper is a good read, (Note I recommend reading this version of the paper because the variable names are easier to follow).

# Implementation


## Paramaterization

To ensure that the 3D covariance matrix is positive definite it is paramaterised by $\Sigma = RSS^TR^T$

## Rasterizer

The rasterizer implementation is key for performance. The authors provide an efficent CUDA implementation of this. 

Unfortunately once we leave the nice land of autograd to get our efficent rasterizer we need to ourselves define the backward pass.

First we will work through what the forward and backward pass of the rasterizer is doing at a high level, then we will delve deeper.

### Forward Pass (High Level)

The forward pass of the rasterizer for 1 pixel is doing the following:

```python
def forward(pixel, gaussians, camera):
    gaussians = camera.filter(gaussians)
    gaussians = camera.sort_by_depth(gaussians)
    remaining_alpha = 1
    colour = [0, 0, 0]
    for gaussian in gaussians:
        2d_gaussian = gaussian.splat(camera)
        current_colour = sph_harmonic_colour(camera, gaussian, pixel)
        current_alpha = exp_term(2d_gaussian, pixel) * gaussian.opacity
        colour += remaining_alpha * current_colour * current_alpha
        remaining_alpha *= (1 - current_alpha)
    return colour
```

This is an expanded form of:

$$c = \sum_{i=0}^n c_i \alpha_i\prod_{j < i} (1-\alpha_j)$$

NOTE: This is not the most efficient way to do this, but it is the most clear.

### Forward Pass (Low Level)

Unfortunately before we can head to the backward pass we need to dig deeper than the psuedocode above.

#### Splatting

We need to dig into the splatting function.

We have our gaussian $\mathcal{N}(u, V)$, we want to project this onto the screen. From our original reference we get our 2D gaussian as:
$\mathcal{N}_{2d}(\mu, \Sigma)$

$\mu = m(u), \Sigma = J.W.V.W^T.J^T$

$$J = \begin{bmatrix} \frac{1}{t_2} & 0 & \frac{-t_0}{t_2^2} \\ 0 & \frac{1}{t_2} & \frac{-t_1}{t_2^2} \end{bmatrix} $$

$$m(u) = \begin{bmatrix}  \frac{t_0}{t_2} \\  \frac{t_1}{t_2} \end{bmatrix}  $$

$W$ is the rotation matrix. $J$ is the jacobian of the perspective projection evaluated at the mean of the gaussian.


#### Exponential Term

The exponential term is the PDF of the 2D gaussian at the pixel location, this is multiplied by the fixed opacity parameter to get the opacity for this gaussian at this pixel.

### Backward Pass

Now to pay back the Faustian bargin which we made to get that lovely fast forward pass. The backward pass depends on what variables we want to compute gradients with respect to. The reference implementation computes gradients with respect to:
- $R \in \mathbb{R}^{3,3}$, rotation
- $S \in \mathbb{R}^{3,3}$, scale
- $o \in \mathbb{R}$, opacity
- $u \in \mathbb{R}^3$, position
- $h \in \mathbb{R}^k$, spherical harmonics coefficients, where $k$ depends on the number of coefficients used.

$$\begin{align*}
\partial c &= \partial \sum_{i=0}^n c_i \alpha_i\prod_{j < i} (1-\alpha_j)\\
&=  \sum_{i=0}^n \partial \left(c_i \alpha_i\prod_{j < i} (1-\alpha_j) \right)\\
&=  \sum_{i=0}^n \partial \left(c_i \alpha_i \right) \left(\prod_{j < i} (1-\alpha_j) \right) + \left(c_i \alpha_i \right) \partial \left(\prod_{j < i} (1-\alpha_j) \right) \\
&=  \sum_{i=0}^n  \left(\partial c_i \alpha_i + c_i \partial \alpha_i \right) \left(\prod_{j < i} (1-\alpha_j) \right) + \left(c_i \alpha_i \right) \partial \left(\prod_{j < i} (1-\alpha_j) \right) \\
\end{align*}$$

$$F_i = \prod_{j < i} (1-\alpha_j)$$


$$F_{i} = F_{i-1} (1 -\alpha_{i-1})$$

$$\begin{align*}
G_i &= \partial \prod_{j < i} (1-\alpha_j) \\
&= \partial \left(\prod_{j < i-1 } (1-\alpha_j) \right)(1 - \alpha_{i-1} ) + \prod_{j < i-1 } (1-\alpha_j) \partial (1 - \alpha_{i-1} ) \\
&= G_{i-1}(1 - \alpha_{i-1} ) + F_{i-1} \partial (1 - \alpha_{i-1} ) \\
&= G_{i-1}(1 - \alpha_{i-1} ) - F_{i-1} \partial (\alpha_{i-1} ) \\

\end{align*} $$

$$\begin{align*}
\partial c &=  \sum_{i=0}^n  \left(\partial c_i \alpha_i + c_i \partial \alpha_i \right) F_i + \left(c_i \alpha_i \right) G_i \\
\end{align*}$$

With this formulation we have the procedure we need to compute the gradients.

1. For each gaussian we compute $c_i$, $\partial c_i$, $\alpha_i$, $\partial \alpha_i$.
2. We compute the partial sum.
3. We update $F_i$, $G_i$.

$c_i$, $\alpha_i$ are the same regardless of what variables we are computing gradients with respect to.

$$\alpha_i = o_i \times \exp \left(-0.5 \left(x - m(u) \right)^T \left(JW\Sigma W^T J^T  \right)^{-1} \left(x - m(u) \right)\right) $$

$$c_i = har_i(camera_\mu - u)$$

---

The variables which we are computing gradients with respect to only impact a single term of the summation.

```python
def backward
```


## Performance

If you implement the above forward pass very naively in python (no parallelization or GPU), the performance you get is pretty dreadful (20+ minutes for a 256x256 image). However with the CUDA implementation provided by the authors, you can get a 1024x1024 image in < 4 milliseconds.

This significant performance leap is done by using the GPU for what it is for, parallelization for graphical primatives.

### GPU

To explain how to get this high performance, we will need to dig into some details of how GPU (CUDA) works.

__Warps, Blocks and Threads__: Multiprocessing on the GPU is not done in the same way as on the CPU. GPU spec sheets will list the number of cores in the thousands. (My RTX 3090 is listed as having 10496 cores)

# What issues?

One thing I like to try and think about when reading a paper are the reasons why this method was not done before, to try and improve my understanding of the contributions.

## Issues with discrete primitives?

When using discrete primitives instead of a neural network as in NeRFs, there is a question about how many primitives will you need to represent a scene?, where should you place them? Should you change this during training? How do you do this efficiently?

This is quite tough as this isn't something which is (easily) differentiable in most cases.

Research in this area has been circling back around to using discrete primatives for a while now in retrospect. 

The authors in this paper describe and well motivate their approach to this problem. They use a function of the magnitude of gradients of the gaussians to determine whether or not the gaussians should be split. They also give a procedure for culling unnecessary gaussians.


## Would it be fast enough?

Attempting to implement this paper using pytorch for example would be very slow relative to the achievable performance, which would have disuaded some researchers. This would havve made it difficult to do quick and dirty tests to check whether or not the idea is worth pursuign further. The authors of this paper provide very performant code for solving the problem using Custom CUDA kernels.

By transforming the previous NeRF approach of effectively ray tracing the scene into rasterisation, the authors are able to avoid the performance issues of dealing with significant amounts of empty space.


## Would it be accurate enough?

Significant amounts of work in this area have reduced the reliance of using the neural network to store the data which is used to render the scene. Use of hash tables in Instant NGP, factorization in TensoRF have been demonstrating how disceretish representations can be used to render scenes with high fidelity.


## Infinite impact of primatives?

The gaussian primative has effectively infinite impact, meaning that technically we need to consider every gaussian in the scene when rendering a pixel. This problem can be sidestepped very well by in general definining a minimum opacity threshold for whether or not the gaussians colour values are added to the pixel value. This in turn defines an ellipsoid of impact for each gaussian, which lets us cull the gaussians for a much more efficent rendering process.

## Correct ordering of primitives?

The order of the primatives for rendering is important for correctness. With splatting we do not have guaranteed correctness. The gaussian which has a closer mean to the camera will be rendered first. However this in practicallity does not seem to be a significant issue for graphical fidelity.