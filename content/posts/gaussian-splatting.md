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

To ensure that the 3D covariance matrix is positive defintie it is paramaterised by $\Sigma = LL^T$

## Rasterizer

The rasterizer implementation is key for performance. The authors provide an efficent CUDA implementation of this. First we will work through what the forward and backward pass of the rasterizer is doing at a high level, then we will delve deeper.

### Forward Pass

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

NOTE: This is not the most efficient way to do this, but it is the most clear.

### Backward Pass

The backward pass depends on what variables we want to compute gradients with respect to.

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