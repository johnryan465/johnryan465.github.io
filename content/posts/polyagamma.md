---
title: "Polyagamma Random Variables"
date: 2023-06-25T12:07:33Z
draft: true
description: "Some properties of polyagamma random variables"
libraries:
- katex
- viz
tags:
- machine-learning
- probability
- statistics
---

# Overview

A polyagamma random variable was first defined "". It is designed to make it easier to sample from the posterior of a bayesian classification model which consists of a gaussian prior and a logistic likelihood.


A random variable $X$ follows a Polya-Gamma distribution $PG(b, z)$ if it is defined as follows:

$$
X = \frac{1}{2} \sum_{j=1}^{\infty} \frac{G_j}{(j - 1/2)^2 + z^2/4}
$$

where \(b > 0\), \(z \in \mathbb{R}\), and \(G_j\) are independent gamma random variables with shape and scale parameters \(b\) and 1, respectively.

Some properties of the Polya-Gamma distribution include:

- The mean of a \(PG(b, z)\) random variable is \(b / (2z) \tanh(z/2)\).
- The variance is \(b / (4z^2)\).
- \(PG(b, z)\) random variables have infinite higher moments.

The Polya-Gamma distribution is notable because it allows for a data augmentation scheme that simplifies the sampling from posterior distributions in Bayesian logistic regression. This is due to the interesting property of the Polya-Gamma distribution: if \(Z \sim N(0, \omega)\) and \(\omega \sim PG(b, 0)\), then \(Z/\sqrt{\omega}\) follows a logistic distribution. Therefore, by augmenting the logistic regression model with Polya-Gamma random variables, the non-Gaussian posterior distribution can be transformed into a Gaussian one, which can be sampled from more easily.