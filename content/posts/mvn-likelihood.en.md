---
title: "Multivariate Normal Expectation"
date: 2020-06-25T12:07:33Z
draft: false
libraries:
- katex
- viz
tags:
- machine learning
---


# Overview

In this post we will be looking at the idea of attempting to calculate the expected value of the product of non independent normal distributions.

$$ E\left[\prod_{i=1}^n X_i\right], \begin{bmatrix}X_1 \\ \vdots \\ X_n\end{bmatrix} \sim N \left(\mu , \Sigma \right)$$

The simplest thing to do is kinda a cop-out, if we implicitly assume independence we get the following result.

$$E\left[\prod_{i=1}^n X_i\right] = \prod_{i=1}^nE\left[ X_i\right] = \prod_{i=1}^n \mu_i $$

This can be useful as it is very simple to compute, but this assumption isn't always valid.

Calculating the intergral for the expectation directly analytically is difficult.

We will use the following theorem:

(From wikipedia)

__Isserlis' Theorem__

If $\left(X_1,\ldots,X_n\right)$ is a zero-mean multivariate normal vector, then


$$E\left[X_1\ldots X_n \right] = \sum_{p \in P^2_n} \prod_{\{i,j\} \in P} E\left[X_i,X_j\right]  = \sum_{p \in P^2_n} \prod_{\{i,j\} \in P} Cov\left(X_i,X_j\right)$$

where the sum is over all the pairings of $\left\{ 1, \ldots, n\right\}$

Note: This implies that if $n \in 2\mathbf{N} + 1$, as we will have no valid pairings that our expectation will be 0.

This is close to what we want, but we unfortunely don't have a 0 mean normal vectors, we have arbitary finite means.


We define the function $h : T \rightarrow R$, where $T$ is the indexing set for our random variables.

$$h(S) = E \left[\prod_{i \in S}  X_i\right] $$

For convinence we will also define 

$$H(\emptyset) = 1 $$

We already know the solution when $\#S = 1$

$$ H(\{s\}) = E\left[X_s\right] = \mu_s$$


We will also define $I : T \rightarrow R$

$I\left(S\right) = \sum_{p \in S^2} \prod_{\{i,j\} \in P} Cov\left(X_i,X_j\right)$

We will be using the fact that translating does not effect the covarience.

Again for convinence we will also define 

$$I(\emptyset) = 1 $$


$\#T = n$

We will refer to the elements of T as $\{1,\ldots,n\}$

Let $n \in 2\mathbf{N}$

$$\begin{aligned} E\left[\left(X_1 - \mu_1 \right) \ldots \left(X_n - \mu_n \right)\right] &= I\left(T\right)\\ E\left[\sum_{S \subseteq T} \prod_{i \in T} \mathbb{1}(i \in S)X_i +  \mathbb{1}(i \notin S)\left(-\mu_i\right)  \right] &= I\left(T\right)\\ \sum_{S \subseteq T} E\left[\prod_{i \in T} \mathbb{1}(i \in S)X_i +  \mathbb{1}(i \notin S)\left(-\mu_i\right)  \right] &= I\left(T\right)\\ \sum_{S \subseteq T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)E\left[\prod_{i \in S} X_i    \right] &= I\left(T\right)\\ \sum_{S \subseteq T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S) &= I\left(T\right)\\ H(T) + \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S) &= I\left(T\right)\\ H(T)  = I\left(T\right) - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S)\\
\end{aligned}
$$

Let $n \in 2\mathbf{N} + 1$


$$H(T)  = - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S)\\
 $$

We replaced $I(T)$ with $0$ as mentioned previously.

This recursive definition only relies on calls to smaller sets and we have defined the base cases so this will terminate.

Now we wish to solve this recurrence relation.



Our base cases are defined.

Lets calculate $H(T)$ with $T = \{1,2\}$.

$$\begin{aligned} H(T)  &= I(T) - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S) \\ H(\{1,2\})  &= I(\{1,2\}) - \left( \left(-\mu_1\right)H(\{2\}) + \left(-\mu_2\right)H(\{1\} + \mu_1 \mu_2) \right)\\ H(\{1,2\})  &= I(\{1,2\})  + \mu_1 \mu_2\\ \end{aligned}$$

We have an inductive hypothesis.

$$H \left(T \right) = \sum_{S \subseteq T} \left(\prod_{i \in T \setminus S} \mu_i \right) I\left(S\right)$$

We have already seen that this is satisified for sets of size 1,2.

Now for the inductive steps.

Case 1: $n \in 2\mathbb{N}$

$$\begin{aligned} H(T)  &= I(T) - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S) \\ &= I(T) - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)\sum_{D \subseteq S} \left(\prod_{i \in S \setminus D} \mu_i \right) I\left(D\right) \\ &= I(T) - \sum_{S \subset T} \left(\prod_{i  \in T \setminus S} \left(-\mu_i\right) \right)\sum_{D \subseteq S} \left(\prod_{i \in S \setminus D} \mu_i \right) I\left(D\right) \\ &= I(T) - \sum_{S \subset T} \sum_{D \subseteq S} \left(\prod_{i  \in T \setminus S} \left(-\mu_i\right) \right)\left(\prod_{i \in S \setminus D} \mu_i \right) I\left(D\right) \\ &= I(T) - \sum_{S \subset T} \sum_{D \subseteq S} (-1)^{\#T \setminus S }\left(\prod_{i  \in T \setminus S} \mu_i \right)\left(\prod_{i \in S \setminus D} \mu_i \right) I\left(D\right) \\ &= I(T) - \sum_{S \subset T} \sum_{D \subseteq S} (-1)^{\#T \setminus S }\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ \end{aligned}$$

In our nested summation we have $(-1)^{\#T \setminus S}$ times a term that only depends on $D$ and $T$ and not $S$.

As $S \subset T$, $1 \leq \#T \setminus S \leq n$

For a fixed $T$ and $D$, with $\#D = m$. 


$$\begin{aligned} H(T) &= I(T) - \sum_{D \subset T} \sum_{i=1}^{n-m} \binom{n-m}{i}(-1)^{i}\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\H(T) &= I(T) - \sum_{D \subset T} (-1)\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ H(T) &= I(T) + \sum_{D \subset T} \left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ H(T) &= \sum_{D \subseteq T} \left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\
\end{aligned}$$



Case 2: $n \in 2\mathbb{N} + 1$

$$\begin{aligned} H(T)  &= - \sum_{S \subset T} \prod_{i  \in T \setminus S} \left(-\mu_i\right)H(S)\\ H(T) &=  - \sum_{S \subset T} \sum_{D \subseteq S} (-1)^{\#T \setminus S }\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ &=  - \sum_{D \subset T} \sum_{i=1}^{n-m}\binom{n-m}{i} (-1)^{i}\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ &=  - \sum_{D \subset T} (-1)\left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ &=   \sum_{D \subset T} \left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ &=   \sum_{D \subseteq T} \left(\prod_{i  \in T \setminus D} \mu_i \right) I\left(D\right) \\ \end{aligned}$$

We can do this as $I(T) = 0$, due to the size of the set being odd.

This completes the proof by induction.

$$H \left(T \right) = \sum_{S \subseteq T} \left(\prod_{i \in T \setminus S} \mu_i \right) I\left(S\right)$$

We now have an explicit form for the expected value.

This however is quite expensive to compute, The outer summation makes this an exponentially expensive calculation in the size of $T$.



$$\begin{aligned} H \left(T \right) &= \sum_{S \subseteq T} \left(\prod_{i \in T \setminus S} \mu_i \right) \left(\sum_{p \in S^2} \prod_{\{i,j\} \in P} Cov\left(X_i,X_j\right) \right) \\ \end{aligned}$$

We can see the if $\forall i:\mu_i = 0$, the summation will collapse except for when $S = T$, and we recover Isserlis Theorem.