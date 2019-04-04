---
title: "Mean and variance"
layout: single
excerpt: "Some simple properties"
sitemap: false
---

This post details some of the more elementary properties of distributions.

### Mean

The mean of a list on numbers is the sum of the numbers divided by the number of numbers.

$$\mu = \frac{X_1+X_2+...+X_n}{n} $$

This simple definition can be extended to probability distributions.

Imagine taking 100 items for the distribution and taking the mean of their sum.

$$\mu = \frac{X_1+X_2+...+X_{100}}{100}$$

This will give an approximation of the mean of the distribution. This approximation will get more and more accurate as more and more samples are taken. The law of large numbers ensures this.

$$\mu = lim_{n-> \infty } \frac{X_1+X_2+...+X_n}{n}$$

The proportion of time that a particular element is drawn from a distribution will converge towards its probability the more samples are drawn from the distribution.

$$\mu = p(x_1)x_1 + p(x_2)x_2 + ... + p(x_n)x_n$$

Which can in turn be written as:

$$\mu = \sum p(x)x $$

This is also known as the expected value of the distribution.

This reasoning can be applied to a continuous distributions also. There is not a finite number of elements for which we can standard summation however we can use integration
For a continuous distribution it is defined as follows:
$$\mu = \int_{-\infty}^{\infty}p(x)x dx $$

##### What happens to the mean when we add a constant to the random variable?

Let $$X$$ be a random variable and $$\mu_{X}$$ is the mean of its distribution.
If $$A$$ is a constant and it is added to $$X$$, the mean of the new random variable is $$\mu_{X} + A$$, while this may seem obvious we should prove it for completeness sake.

Every element $$X_n$$ drawn from the distribution will now be equal to $$X_n + A$$. We can go back to our formula for the mean $$\mu_{x} = \sum p_i x_i$$

When $$A$$ is added to the distribution we can replace $$X$$ with $$X+A$$.

$$\mu_{x+A} = \sum p_i(x_i+A)$$

$$\mu_{x+A} = \sum p_i x_i + \sum p_i A$$

$$\mu_{x+A} = \mu_{x} + \sum p_i A$$

$$\mu_{x+A} = \mu_{x} + A\sum p_i$$

And because $$p$$ is a PDF the $$\sum p_i = 1$$

$$\mu_{x+A} = \mu_{x} + A(1)$$

$$\mu_{x+A} = \mu_{x} + A$$


##### What happens to the mean when we multiply a constant by the random variable?

Let $$X$$ be a random variable and $$\mu_{X}$$ is the mean of its distribution.
If $$B$$ is a constant and it is multiplied by $$X$$, the mean of the new random variable is $$B\mu_{X}$$, again we will prove it for completeness sake.

Every element $$X_n$$ drawn from the distribution will now be equal to $$BX_n$$. We can go back to our formula for the mean $$\mu_x = \sum p_i x_i$$

When $$B$$ is multiplied by the distribution we can replace $$X$$ with $$BX$$.

$$\mu_{Bx} = \sum p_i(Bx_i)$$

$$\mu_{Bx} = B\sum p_i x_i$$


$$\mu_{Bx} = B\mu_{x}$$

### Variance

Variance of a distribution is a measure of spread of the distribution.
For discrete random variables variance is defined as:

$$ \sigma_{X}^2 = \sum (x_i - \mu_x)^2 p_i $$

Similarly for continuous random variables it is:

$$ \sigma_{X}^2 = \int_{-\infty}^{\infty} (x_i - \mu_x)^2 p_i $$

THe standard deviation is the square root of the variance. ie $$\sigma_x$$

##### How does the variance change when a constant is added the the distribution?

$$ \sigma_{x}^2 = \sum (x_i - \mu_x)^2 p_i $$

$$ \sigma_{x+A}^2 = \sum((x_i + A) - \mu_{x+A})^2 p_i$$

From above we know that $$\mu_{x+A} = \mu_{x} + A $$

$$ \sigma_{x+A}^2 = \sum(x_i + A - \mu_{x} + A)^2 p_i$$

$$ \sigma_{x+A}^2 = \sum(x_i + \mu_{x})^2 p_i$$

Therefore:

$$ \sigma_{x}^2  = \sigma_{x+A}^2 $$

This makes intuitive sense as adding a constant will shift the entire distribution in one direction, this wouldn't actually change the spread.

##### How does the variance change when a constant is multiplied by the distribution?

$$ \sigma_{x}^2 = \sum (x_i - \mu_x)^2 p_i $$

$$ \sigma_{x}^2 = \sum (x_i^2 - 2 x_i \mu_x +\mu_x^2) p_i $$


$$ \sigma_{Bx}^2 = \sum(Bx_i - \mu_{Bx})^2 p_i$$

From above we know that $$\mu_{Bx} = B\mu_{x}$$

$$ \sigma_{Bx}^2 = \sum(Bx_i - B\mu_{x})^2 p_i$$

$$ \sigma_{Bx}^2 = \sum(B(x_i - \mu_{x}))^2 p_i$$

$$ \sigma_{Bx}^2 = \sum B^2(x_i - \mu_{x})^2 p_i$$

$$ \sigma_{Bx}^2 = B^2\sum (x_i - \mu_{x})^2 p_i$$

Therefore:

$$ \sigma_{Bx}^2 = B^2\sigma_{x}^2 $$


##### Sum of independent variables

Take two independent random variables $$x$$ and $$y$$ with variances $$\sigma_y^2$$ and $$\sigma_y^2$$ respectively.

What is the variance of the various combinations of these variables?

##### The sum

$$ \sigma_{x+y}^2 = \sum ((x+y)_i - \mu_{x+y})^2 p_i $$

To work this out we will be separating out all the different combinations of $$x$$ and $$y$$.
Think about it as creating 2 different 2d grids, 1 for the probability of getting that particular pair of elements from $$x$$ and $$y$$ and then the other which is the sum of that $$x$$ and $$y$$.
If there are $$n$$ possible elements from $$x$$ and $$m$$ from $$y$$ each of these grids will have $$n*m$$ elements.

$$
\begin{array}{l|l l l l}
 & x_1 & x_2 & x_3 & x_4 & x_5 \\ \hline
y_1 & p(x_1,y_1) & p(x_2,y_1) & p(x_3,y_1) & p(x_4,y_1) & p(x_5,y_1)\\
y_2 & p(x_1,y_2) & p(x_2,y_2) & p(x_3,y_2) & p(x_4,y_2) & p(x_5,y_2)\\
y_3 & p(x_1,y_3) & p(x_2,y_3) & p(x_3,y_3) & p(x_4,y_3) & p(x_5,y_3)\\
y_4 & p(x_1,y_4) & p(x_2,y_4) & p(x_3,y_4) & p(x_4,y_4) & p(x_5,y_4)\\
y_5 & p(x_1,y_5) & p(x_2,y_5) & p(x_3,y_5) & p(x_4,y_5) & p(x_5,y_5)
 \end{array}
$$

$$
\begin{array}{l|l l l l}
 & x_1 & x_2 & x_3 & x_4 & x_5 \\ \hline
y_1 & x_1+y_1 & x_2+y_1 & x_3+y_1 & x_4+y_1 & x_5+y_1\\
y_2 & x_1+y_2 & x_2+y_2 & x_3+y_2 & x_4+y_2 & x_5+y_2\\
y_3 & x_1+y_3 & x_2+y_3 & x_3+y_3 & x_4+y_3 & x_5+y_3\\
y_4 & x_1+y_4 & x_2+y_4 & x_3+y_4 & x_4+y_4 & x_5,y_4\\
y_5 & x_1+y_5 & x_2+y_5 & x_3+y_5 & x_4+y_5 & x_5+y_5
 \end{array}
$$

As these two random variables are independent
 $$p(x_i,y_j) = p(x_i)p(y_j)$$

Lets manipulate the formula for variance to make it easier to work with
$$ \sigma_{z}^2 = \sum_z (z_i - \mu_{z})^2 p_i $$

$$ \sigma_{z}^2 = \sum_z (z_i^2 -2z_i \mu_z + \mu_{z}^2) p_i $$

$$ \sigma_{z}^2 = \sum_z z_i^2p_i -2\sum_zz_i \mu_z p_i + \sum_z\mu_{z}^2 p_i $$

$$ \sigma_{z}^2 = \sum_z z_i^2p_i -2\mu_z\sum_zz_i  p_i + \mu_{z}^2 $$

$$ \sigma_{z}^2 = \sum_z z_i^2p_i -2\mu_z^2 + \mu_{z}^2 $$

$$ \sigma_{z}^2 = \mu_{z^2} - \mu_{z}^2 $$

$$ \sigma_{x+y}^2 = \mu_{(x+y)^2} - \mu_{x+y}^2 $$

$$ \sigma_{x+y}^2 = \mu_{x^2+2xy+y^2} - \mu_{x+y}^2 $$

$$ \sigma_{x+y}^2 = \mu_{x^2}+\mu_{2xy} +\mu_{y^2} - \mu_{x+y}^2 $$

$$ \sigma_{x+y}^2 = \mu_{x^2}+\mu_{2xy} +\mu_{y^2} - (\mu_{x} + \mu_{y})^2 $$

$$ \sigma_{x+y}^2 = \mu_{x^2}+2\mu_{x}\mu_{y} +\mu_{y^2} - (\mu_{x}^2 + 2\mu_{x}\mu_{y} +\mu_{y}^2) $$

$$ \sigma_{x+y}^2 = \mu_{x^2} +\mu_{y^2} - (\mu_{x}^2 +\mu_{y}^2) $$

$$ \sigma_{x+y}^2 = \mu_{x^2} - \mu_{x}^2 + \mu_{y^2} - \mu_{y}^2 $$

$$ \sigma_{x+y}^2 = \sigma_x^2 + \sigma_y^2$$
