---
title: "Derivation of Backprop"
layout: single
description: "It's not that complex"
sitemap: true
date: 2019-04-04
tags: 
- machine-learning
- calculus
- linear-algebra
---


# Introduction

First we must define how a feed-forward network functions.

The inputs to the model can be viewed as the 0th layers output. $$\mathbf{\phi}^0 = \mathbf{X}$$

Note: the indexing of the weight matrix may seem backwards but doing it this way prevents us having to take the transpose of the weight matrix when converting to matrix form.


$$
\begin{aligned}
\mathbf{\rho}^{L}_j &= \sum_k W^L_{jk}\phi^{L-1}_k   + B^L_j \\
\mathbf{\rho}^L &= W^L\phi^{L-1} + B^L \\
\mathbf{\phi}^{L}_j &= \sigma \left(\sum_k W^L_{jk}\phi^{L-1}_k   + B^L_j\right)\\
\mathbf{\phi}^L &= \sigma_v \left(\rho^L\right)\\
\end{aligned}
$$

Given all of the required parameters are given and are properly defined this fully defines a feed-forward network. These definition are not where the magic of a neural net happens (I intend on detailing how the formulation allows it to be a good function approximator however at some point).

The magic happens by combining an optimisation algorithm (gradient descent is the standard) with backpropagation.

# Derivation

Backprop sounds very mysterious but all it is, is an algorithm to calculate partial derivatives of the cost function with respect to each of the learnable parameters (the weights and biases). ie $$\frac{\partial C}{\partial W_{jk}^L} , \frac{\partial C}{\partial B_j^L}$$

The most common cost function is the squared error (below), but many others exist.
 $$C = \frac{1}{2n}\sum_i\left(\phi^l(x_i)-y_i\right)^2$$


$$
\begin{aligned}\frac{\partial C}{\partial W_{jk}^L} &= \frac{\partial C}{\partial \phi^L_j} \frac{\partial \phi^L_j}{W_{jk}^{L}}  \\
&= \sum_{a,b,\ldots,f}  \frac{\partial C}{\partial \phi^l_a}\frac{\partial \phi^{l}_a}{\partial \phi^{l-1}_b}\ldots\frac{\partial \phi^{L+1}_f}{\partial \phi^{L}_j} \frac{\partial \phi^L_j}{W_{jk}^{L}}  \\
\end{aligned}
$$

We now have a formulation for the result we wish to calculate, however computing this directly for all of the nodes in the network would be quite expensive.

From this formulation it makes sense that we will try to compute the derivatives from the last layer back.

We will attempt to derive the derivatives of the current layer in terms of the previous

We will define $$\omega^L_j = \frac{\partial C}{\partial \phi^L_j} $$, this is the error of the output of the jth node in the Lth layer.

$$
\begin{aligned} \frac{\partial C}{\partial \phi^L_j} &= \sum_a \frac{\partial C}{\partial \rho^{L+1}_a}\frac{\partial \rho^{L+1}_a}{\partial \phi^L_j} \\
\omega_j^L &= \sum_a \frac{\partial C}{\partial \rho^{L+1}_a} W_{aj}^{L+1} \\
&= \sum_a \frac{\partial C}{\partial \phi^{L+1}_a} \frac{\partial \phi_{a}^{L+1}}{\partial \rho^{L+1}_a} W_{aj}^{L+1} \\
&= \sum_a \frac{\partial C}{\partial \phi^{L+1}_a} \sigma'\left( \rho^{L+1}_a \right) W_{aj}^{L+1} \\
&= \sum_a \omega^{L+1}_a \sigma'\left( \rho^{L+1}_a \right) W_{aj}^{L+1} \\
&= \sum_a \left (\omega^{L+1} \circ \sigma_v'\left( \rho^{L+1} \right) \right)_{a}W_{aj}^{L+1} \\
&= \sum_a \left(W_{*,j}^{L+1}\right)_a \left (\omega^{L+1} \circ \sigma_v'\left( \rho^{L+1} \right) \right)_{a} \\
&= \left(W_{*,j}^{L+1}\right)^T \left (\omega^{L+1} \circ \sigma_v'\left( \rho^{L+1} \right) \right) \\
\end{aligned}
$$

This shows that we can compute the error of the previous layer from the current one.

$$
\begin{aligned} \frac{\partial C}{\partial \phi^L} &= \left(W^{L+1}\right)^T \left (\omega^{L+1} \circ \sigma_v'\left( \rho^{L+1} \right) \right) \\
\end{aligned} \tag{A1}
$$


$$
\begin{aligned}\frac{\partial C}{\partial B^L_j} &= \frac{\partial C}{\partial \phi_j^L}\frac{\partial \phi_j^L}{\partial B_j^L}  \\
&= \omega_j^L\sigma'\left( \rho_j^L \right)(1)\\
&= \omega_j^L\sigma'\left( \rho_j^L \right) \\
\end{aligned}
$$

$$
\begin{aligned}\frac{\partial C}{\partial B^L} &= \omega^L \circ \sigma_v'\left(\rho^L\right) \tag{A2}\\
\end{aligned}
$$


$$
\begin{aligned}\frac{\partial C}{\partial W^L_{jk}} &= \frac{\partial C}{\partial \phi_j^L}\frac{\partial \phi_j^L}{\partial W_{jk}^L}  \\
&= \omega_j^L\sigma'\left( \rho_j^L \right)\left(\phi_k^{L-1}\right)\\
\end{aligned}
$$

$$
\begin{aligned}\frac{\partial C}{\partial W^L} &= \left (\omega^L \circ \sigma_v'\left( \rho^L \right) \right)\left(\phi^{L-1}\right)^T \tag{A3}\\
\end{aligned}
$$

This allows us to compute the derivative with respect to each parameter we can control, if we compute the error terms first.

So in what order should we compute these values? We can see that we first should compute $$\rho^L,\phi^L,\sigma_v'(\rho^L)$$. This can be done in a single forward pass. Then we can compute all the error terms in a single backward pass.

This is all backpropagation is for a straightforward feed forward network.

## Speed up

We can see that in our formulation that when ever we use $$\omega^L$$, it is in the context of $$\omega^L \circ \sigma_v' \left(\rho^L\right)$$. We compute this quantity in all of the steps of the algorithm. We could define $$\lambda^L = \omega^L \circ \sigma_v' \left(\rho^L\right)$$

$$
\begin{aligned}
\omega^L &= \left( W^{L+1}\right)^T  \lambda^{L+1} \tag{B1}\\
\omega^L \circ \sigma_v' \left(\rho^L\right) &= \left(\left(W^{L+1}\right)^T \lambda^{L+1} \right)\circ \sigma_v' \left(\rho^L\right) \\
\lambda^L &= \left(\left(W^{L+1}\right)^T \lambda^{L+1} \right)\circ \sigma_v' \left(\rho^L\right) \\
\end{aligned}
$$


$$
\begin{aligned}\frac{\partial C}{\partial B^L} &= \omega^L \circ \sigma_v'\left(\rho^L\right) \tag{B2}\\
\frac{\partial C}{\partial B^L} &= \lambda^L\\
\end{aligned}
$$



$$
\begin{aligned}\frac{\partial C}{\partial W^L} &= \left (\omega^L \circ \sigma_v'\left( \rho^L \right) \right)\left(\phi^{L-1}\right)^T \tag{B3}\\
\frac{\partial C}{\partial W^L} &= \lambda^L\left(\phi^{L-1}\right)^T \\
\end{aligned}
$$

---
**NOTE**

This version of the equations are probably the ones you have seen before. If we had defined $$\omega^L_j = \frac{\partial C}{\partial \rho^L_j}$$ instead, our first set of derived equations would look like our modified version. This was done intentionally to show that even without that observation it can be derived.

---

While this algorithm is extremely powerful, it's nothing that a student with some linear algebra and multivariate calculus knowledge couldn't derive.
