---
title: "Gaussian Processes"
date: 2020-05-19T15:29:01Z
draft: false
libraries:
- katex
- viz
tags:
- machine learning
---

### TLDR
Gaussian Processes can be used to predict unknown values of a function, using known points and some function which specifies how the values of different points should relate.


## Definition

(From wikipedia)

A time continuous schochastic process $\left\{ X_t ; t \in T \right\}$ is Gaussian iff for every finite set of indices $t_1,\ldots ,t_k  \in T$

$$X_{t_1,\ldots, t_k} = \left(X_{t_1} , \ldots,  X_{t_k} \right)$$

is a multivariate Gaussian.

We can almost view this as a infinite dimensional Gaussian.

## Why?

When we are attempting a machine learning problem we are generally attempting to learn specific values (parameters) of some function that we have decided on.

Eg you might use a feed-forward neural network of a specific size and activations, but you need to learn the weights of this function. By doing this we are adding significant priors to our beliefs, some we might not even realise.

The idea in Gaussian Processes is a bit different, we don't know the function and are going to try and learn the function itself, not the parameters of a pre chosen function.

There's clearly an issue with this approach, without some other constraints this isn't going to be very useful. The span of functions that could be correct in theory can be weird and wonderful.

So we would like to add some prior belief to the space of functions we want to consider.

The idea behind using Gaussian Processes to model a function is for the output of the function for a specific input is modelled as a random variable which is normally distributed.

However these random variables don't have to be independent. We decide the prior covariances according to a kernel function.

We also need a prior for the means of each of these variables.

We now have an prior for values of a function at a set of points.

If we have some data-points we can condition over knowing their values $\left((x_i, y_i), \ldots \right)$ to get a posterior distribution over the remainder of them.

We can model epistemic uncertainty of measurements by not conditioning over knowing the exact value but by conditioning over $x_i$ being distributed via $N(y_i, \sigma^2)$ for some noise parameter $\sigma$.


## Technical

$$ \in $$
