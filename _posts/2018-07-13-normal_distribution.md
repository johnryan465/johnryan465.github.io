---
title: "Derivation of the Normal Distribution"
layout: single
excerpt: "Where does the formula come from?"
sitemap: false
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
<script
src="https://code.jquery.com/jquery-3.3.1.js"
integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>


(In this derivation I may go into some unnecessary detail for some of the mathematically experienced readers but I would rather that than for some readers to be lost by me skipping steps)

I am assuming that the reader has a firm grasp of calculus, and a working knowledge of linear algebra(very little is actually required). Please send any corrections/comments to john@solaire.ie

Most people who have taken an entry level statistic class will have heard about the normal distribution. Its is an extremely useful distribution for dealing with real world problems. By the time most students will begin dealing with the normal distribution they will have learned about elementary calculus. It seems like it would be a perfect application of integration, however instead students use log tables with precomputed values in them to solve problems. A curious student may wonder why and discover that there is no integral for the P.D.F of the normal distribution consisting of elementary functions. What sort of crazy function could this be?

$$ p(x) = \sqrt{\frac{1}{2\pi\sigma^2}} e^{\frac{-1}{2\sigma^2}(x - \mu)^2}  $$

At first glance this function seems so complex that it may seem unlikely for it to occur naturally. However as we will show here it can be derived from simple properties.


Lets call the P.D.F of the normal distribution p(x)

There are 2 fundamental properties of p(x) that we are going to use in its derivation.
1. The rate at which the probability of finding a value decreases is proportional to the distance from the mean.
2. The rate at which the probability of finding a value decreases is proportional to the frequency themselves.

We will also be using some of the properties of all P.D.Fs in this derivation.

3. The function will always be non-negative
4. The integral of the function from negative infinity to infinity is 1

We will need to translate each of these properties to mathematical notation.


$$\tag{A1}\frac{-d(p(x)}{dx} \propto  (x-\mu)$$

$$\tag{A2}\frac{-d(p(x)}{dx}  \propto p(x)$$

$$\tag{A3}p(x) >= 0 $$

$$\tag{A4}\int_{-\infty}^{\infty}p(x)dx = 1$$


Combining properties 1 and 2:

$$\tag{Eq 1.1}\frac{-d(p(x)}{dx}  \propto (x-\mu)p(x)$$

Adding constant of proportionality
$$\frac{d(p(x)}{dx} = -k(x-\mu)(p(x))$$

$$\tag{Eq. 1.2}\frac{1}{p(x)}  d(p(x)) = -k(x-\mu)dx$$




Integrate Both sides

$$\tag{Eq 2.1}\int \frac{1}{p(x)} dx = \int -k(x-\mu)dx$$

$$\int \frac{1}{p(x)} dx = -k\int (x-\mu)dx$$

I have used substitution in the next stage, while it is unnecessary, doing it here keeps the formula nice and tidy.

$$\tag{Eq. 2.2.1} \beta = x - \mu $$

$$\tag{Eq. 2.2.2}d\beta = dx $$

$$\tag{Eq. 2.2.3}\int \frac{1}{p(x)} dx = -k\int \beta d\beta$$

$$\int \frac{1}{p(x)} dx = -k \frac{\beta^2}{2} + C $$

$$\tag{Eq. 2.2.4}\ln{p(x)} = -k \frac{(x-\mu)^2}{2} + C$$

$$\tag{Eq. 2.3.1}p(x) = e^{-k \frac{(x-\mu)^2}{2} + C}$$

$$\tag{Eq. 2.3.2}p(x) = e^{C}e^{-k \frac{(x-\mu)^2}{2}}$$

$$\tag{Eq. 2.3.3} h = e^{C} $$




This formulation shows that h is a constant and can so be treated as such moving forward

$$\tag{Eq. 2.4} p(x) = h e^{\frac{-k}{2}(x - \mu)^2}  $$



$$\tag{A4}\int_{-\infty}^{\infty} p(x)dx = 1$$

$$\tag{Eq 3.1.1}\int_{-\infty}^{\infty} h e^{\frac{-k}{2}(x - \mu)^2}dx = 1$$

$$\tag{Eq 3.1.2}\int_{-\infty}^{\infty}  e^{\frac{-k}{2}(x - \mu)^2}dx = \frac{1}{h}$$

$$\tag{Eq. 3.2.1} u = x- \mu $$

$$\tag{Eq. 3.2.2}du = dx$$

$$\tag{Eq. 3.2.3}\int_{-\infty}^{\infty}  e^{\frac{-k}{2}u^2}du = \frac{1}{h}$$


The function is symmetric

$$2\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du = \frac{1}{h}$$
$$\tag{Eq. 3.2.4}\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du = \frac{1}{2h}$$

We now need to evaluate this integral, this is a Gaussian integral. Gaussian integrals are the integrals of e to the power of a convex quadratic function. Evaluating these types of integrals is quite an involved process.

$$ \tag{Eq. 4.1}I = \int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du $$

Square both sides

$$ \tag{Eq. 4.2}I^{2} = {\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du}^2 $$

$$ I^{2} = {\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du}{\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du}  $$

replace one of the u with a dummy variable v

$$ \tag{Eq. 4.3} I^{2} = {\int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du}{\int_{0}^{\infty}  e^{\frac{-k}{2}v^2}dv}  $$

The product of two integrals where the two variables are not dependent and the bounds of the two integral are not dependent on the other variable can be transformed to an iterated integral. How is this true?


$$\tag{Eq. B1}M = \int_{a}^{b}f(x)dx \int_{c}^{d}g(y)dy$$

If $\int_{a}^{b}f(x)dx$ is defined it will become a constant, so it can be brought inside the other integral.

$$\tag{Eq. B2}M =  \int_{c}^{d}\int_{a}^{b}f(x)dxg(y)dy$$

$g(y)$ is a constant with respect to $\int_{a}^{b}f(x)dx$ so it can be brought inside the integral.

$$\tag{Eq. B3}M =  \int_{c}^{d}\int_{a}^{b}f(x)g(y)dxdy$$

$$\tag{Eq. 4.4} I^{2} = {\int_{0}^{\infty} {\int_{0}^{\infty} e^{\frac{-k}{2}u^2}}  e^{\frac{-k}{2}v^2}du  dv}  $$

$$ I^{2} = {\int_{0}^{\infty} {\int_{0}^{\infty} e^{\frac{-k}{2}u^2 + \frac{-k}{2}v^2}} du  dv}  $$

$$\tag{Eq. 4.5} I^{2} = {\int_{0}^{\infty} {\int_{0}^{\infty} e^{\frac{-k}{2}(u^2 +v^2)}} du  dv}  $$

Transforming the coordinates will make it easier to solve. How this formula is derived is quite interesting and is detailed quite well [here](https://mathinsight.org/double_integral_change_variables_area_calculation). To explain this would require its own post but I highly recommend checking out the link. I will explain each of the components of this formula before moving on.

$$\tag{Eq. B3}\int \int_{D} g(x,y)dA = \int \int_{D*}g(T(u,v))|detDt(u,v)|dudv$$

We are going to transform it from using Cartesian coordinates to polar coordinates

Let $T$ be the function which does the transformation.
$$\tag{Eq. 5.1}(x,y) = T(u,v)$$

The $(x,y)$ are the coordinates of the original regon we are working width
$(u,v)$ are the new coordinates we are changing to, for polar coordinates these are $(r,\theta)$

This means that $\tag{Eq. 5.2}T(r,\theta) = (rcos\theta . rsin\theta)$

$DT(r,\theta)$ is the derivative matrix of T

######What is a derivative matrix?
It is a generalization of the derivative of a single valued function.
Lets start with a simple function.

Let $f(a): R\rightarrow R$

$$Df(a) = \begin{bmatrix} \frac{df}{dx} \end{bmatrix} $$

The derivative matrix of single input, single output function is just a matrix with a single entry which is the derivative of the function.

Let $g(a): R^N\rightarrow R$

$$Dg(a) = \begin{bmatrix} \frac{ \partial f}{ \partial x_1} & \frac{ \partial f}{ \partial x_2} & \frac{ \partial f}{ \partial x_3} & \ldots &\frac{ \partial f}{ \partial x_n} \end{bmatrix} $$

The derivative matrix of function with multiple inputs and a single output is a matrix with 1 row with an entry each input which is the partial derivative of the output of the function with respect to that input.


Let $h(a): R^N\rightarrow R^M$

$$ Dh(a) =\begin{bmatrix} \frac{ \partial f_1}{ \partial x_1} & \frac{ \partial f_1}{ \partial x_2} & \frac{ \partial f_1}{ \partial x_3} & \ldots &\frac{ \partial f_1}{ \partial x_n} \\
\frac{ \partial f_2}{ \partial x_1} & \frac{ \partial f_2}{ \partial x_2} & \frac{ \partial f_2}{ \partial x_3} & \ldots &\frac{ \partial f_2}{ \partial x_n}\\
 \frac{ \partial f_3}{ \partial x_1} & \frac{ \partial f_3}{ \partial x_2} & \frac{ \partial f_3}{ \partial x_3} & \ldots &\frac{ \partial f_3}{ \partial x_n} \\
 \vdots & \vdots & \vdots & \ddots &\vdots \\
  \frac{ \partial f_m}{ \partial x_1} & \frac{ \partial f_m}{ \partial x_2} & \frac{ \partial f_m}{ \partial x_3} & \ldots &\frac{ \partial f_m}{ \partial x_n}  \end{bmatrix} $$

The derivative matrix of function with multiple inputs and multiple outputs is a matrix with row for each output, with an entry on each row for each input which is the partial derivative of the output of that row with respect to that input.

So what is the derivative matrix of the function $T$?

$f_1 = rcos\theta$,

$f_2 = rsin\theta$,

$x_1 = r$,

$x_2 = \theta$


$$ DT(r,\theta) =   \begin{bmatrix} \frac{ \partial f_1}{ \partial x_1} & \frac{ \partial f_1}{ \partial x_2} \\
\frac{ \partial f_2}{ \partial x_1} & \frac{ \partial f_2}{ \partial x_2} \end{bmatrix} =  \begin{bmatrix}  \frac{ \partial rcos\theta}{ \partial r} & \frac{ \partial rcos\theta}{ \partial \theta} \\
\frac{ \partial rsin\theta}{ \partial r} & \frac{ \partial rsin\theta}{ \partial \theta} \end{bmatrix} $$

$$ \frac{ \partial rcos\theta}{ \partial r} = cos\theta $$

$$ \frac{ \partial rcos\theta}{ \partial \theta} = -rsin\theta$$

$$ \frac{ \partial rsin\theta}{ \partial r} = sin\theta$$

$$ \frac{ \partial rsin\theta}{ \partial \theta} = rcos\theta$$

$$ DT(r,\theta) = \begin{bmatrix}   cos\theta& -rsin\theta \\
rsin\theta & rcos\theta \end{bmatrix}$$

$det$ is the determinant of a matrix. The determinant of a matrix can be viewed as the scaling factor of a linear transformation.

$$det\begin{bmatrix}   a&b \\
c&d\end{bmatrix} = ad - bc$$

$$detDT(r, \theta) = cos\theta(rcos\theta) - (-rsin\theta)sin\theta$$

$$detDT(r, \theta) = r(cos^2\theta +sin^2\theta)$$

$$ cos^2\theta + sin^2\theta = 1$$

$$detDT(r, \theta) = r$$

$$I^2= \int_0^\frac{\pi}{2} \int_{0}^{\infty} e^{\frac{-k}{2}((rcos\theta)^2 + (rsin\theta)^2)}rdrd\theta$$

$$I^2= \int_0^\frac{\pi}{2} \int_{0}^{\infty} e^{\frac{-k}{2}r^2}rdrd\theta$$

$$p=\frac{kr^2}{2} $$

$$\frac{dp}{dr} = kr $$

$$dr = \frac{1}{kr}dp $$

$$I^2= \int_0^\frac{\pi}{2} \int_{0}^{\infty} e^{-p}r\frac{1}{kr}dpd\theta$$

$$I^2= \frac{1}{k}\int_0^\frac{\pi}{2} \int_{0}^{\infty} e^{-p}dpd\theta$$

$$I^2= \frac{1}{k}\int_0^\frac{\pi}{2}d\theta \int_{0}^{\infty} e^{-p}dp$$

$$I^2= \frac{1}{k}\frac{\pi}{2} \int_{0}^{\infty} e^{-p}dp$$

$$I^2= \frac{\pi}{2k} \left[ -e^{-p} \right]_{0}^{\infty}$$
$$I^2= \frac{\pi}{2k}( lim_{x->\infty}\left( -e^{-p} \right) -\left( -e^{-0} \right)) $$

$$I^2= \frac{\pi}{2k}(1) $$

$$I^2= \frac{\pi}{2k} $$

$$I= \pm\sqrt{\frac{\pi}{2k}} $$

The sign of h will be the same as the sign of I. As $p(x) >= 0$ for all values of x. This means $h >= 0$$ and therefore $I >= 0$. Therefore we reject the negative solution for $I$.

$$I= \sqrt{\frac{\pi}{2k}} $$

$$I = \int_{0}^{\infty}  e^{\frac{-k}{2}u^2}du = \frac{1}{2h}$$

$$ \sqrt{\frac{\pi}{2k}} = \frac{1}{2h}$$

$$ \frac{\sqrt{\pi}}{\sqrt{2k}} = \frac{1}{2h}$$

$$ \frac{\sqrt{2k}}{\sqrt{\pi}} = 2h$$  

$$ \frac{\sqrt{2k}}{2\sqrt{\pi}} = h$$

$$ \sqrt{\frac{k}{2\pi}} = h$$

This P.M.F satisfies the all the properties we started with, however the k is a constant which encodes some information, modifying k will change the properties of the distribution but we don't in what way. Encoding extraneous in a distribution is a bad idea. If we plot this function with various values of k we can see that variance changes. So we will find the variance in terms of k.

$$ p(x) = \sqrt{\frac{k}{2\pi}} e^{\frac{-k}{2}(x - \mu)^2}  $$


<p class="input">
  <label class="input" for="meanbox">Mean: </label>
  <input class="input inputbox" type="text" id="meanbox" size="3" value="0"/>
  <label class="input" for="stdevbox">K</label>
  <input class="input inputbox" type="text" id="stdevbox" size="3" value="1"/>
  <input class="input inputbox" type="checkbox" id="axisscalecheck" value="lock" checked>Scale axes
</p>
<div id="normal_distribution_k"><div>
<script type="text/javascript" src="http://www.solaire.ie/assets/js/normal_distribution_k.js"></script>
<link rel="stylesheet" type="text/css" href="http://www.solaire.ie/assets/css/normal_distribution_k.css">

The definition of variance

$$\sigma^2 = \int_{-\infty}^{\infty}(x-\mu)^2f(x)dx$$

In our case our function is $p(x)$

$$\sigma^2 = \int_{-\infty}^{\infty}(x-\mu)^2p(x)dx$$
$$L = x-\mu$$

$$\frac{dL}{dx} = 1$$

$$dL = dx$$

$$\sigma^2 = \int_{-\infty}^{\infty}(L)^2p(L+\mu)dL$$

$$\sigma^2 = \int_{-\infty}^{\infty}(L)^2\sqrt{\frac{k}{2\pi}} e^{\frac{-k}{2}(L + \mu - \mu)^2}dL$$

$$\sigma^2 = \int_{-\infty}^{\infty}(L)^2\sqrt{\frac{k}{2\pi}} e^{\frac{-k}{2}(L)^2}dL$$

$$\sigma^2 = \sqrt{\frac{k}{2\pi}}\int_{-\infty}^{\infty}L^2 e^{\frac{-k}{2}L^2}dL$$
$$\sigma^2 = \sqrt{\frac{k}{2\pi}}J$$

Next we need to evaluate

$$J = \int_{-\infty}^{\infty}L^2 e^{\frac{-k}{2}L^2}dL$$

Its symmetrical

$$J = 2\int_{0}^{\infty}L^2 e^{\frac{-k}{2}L^2}dL$$

#####Integration by parts
Derivation of formula

$$y=uv $$

$$ \frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}$$

$$u\frac{dv}{dx} =  \frac{dy}{dx} - v\frac{du}{dx}$$

Integrate both sides

$$u\frac{dv}{dx} =  \frac{d(uv)}{dx} - v\frac{du}{dx}$$

$$\int_{a}^{b} u\frac{dv}{dx}dx = \int_{a}^{b} \left( \frac{d(uv)}{dx} - v\frac{du}{dx} \right)dx$$

$$\int_{a}^{b} u\frac{dv}{dx}dx = \int_{a}^{b}  \frac{d(uv)}{dx}dx  - \int_{a}^{b} v\frac{du}{dx}dx$$

$$\int_{a}^{b} u\frac{dv}{dx}dx = \left[uv\right]_{a}^{b}  - \int_{a}^{b} v\frac{du}{dx}dx$$
Back to our integrals

$$ J = 2\int_{0}^{\infty}L^2 e^{\frac{-k}{2}L^2}dL$$

$$ u = L $$

$$\frac{du}{dL} = 1$$

$$\frac{dv}{dL} = L e^{\frac{-k}{2}L^2}$$

$$ v = \int L e^{\frac{-k}{2}L^2} dL $$

$$ J = 2\left( \left[ L\int L e^{\frac{-k}{2}L^2} dL \right]_{0}^{\infty} - \int_{0}^{\infty} \left(\int L e^{\frac{-k}{2}L^2} dL)(1) dL \right) \right)$$

Need to solve the internal integral

$$F =\int L e^{\frac{-k}{2}L^2} dL $$

$$ J = 2\left( \left[ LF \right]_{0}^{\infty} - \int_{0}^{\infty} F dL  \right)$$

U substitution

$$\rho = L^2$$

$$\frac{d\rho}{dL} = 2L $$

$$ dL =  \frac{1}{2L}d\rho$$

$$F =\int L e^{\frac{-k}{2}\rho} \frac{1}{2L}d\rho$$

$$F =\frac{1}{2}\int  e^{\frac{-k}{2}\rho} d\rho$$

$$F =\frac{1}{2}\frac{-2}{k} e^{\frac{-k}{2}\rho} + C$$

$$F =\frac{-1}{k} e^{\frac{-k}{2}\rho} + C$$

$$F =\frac{-1}{k} e^{\frac{-k}{2}L^2} + C$$


$$ J = 2\left( \left[ L\left(\frac{-1}{k} e^{\frac{-k}{2}L^2} + C\right) \right]_{0}^{\infty} - \int_{0}^{\infty} \left(\frac{-1}{k} e^{\frac{-k}{2}L^2} + C \right) dL  \right)$$

$$ J = 2\left( \left[ \frac{-L}{k} e^{\frac{-k}{2}L^2} + LC \right]_{0}^{\infty} - \int_{0}^{\infty} \frac{-1}{k} e^{\frac{-k}{2}L^2}dL - \int_{0}^{\infty} C  dL  \right)$$

$$ J = 2\left( \left[ \frac{-L}{k} e^{\frac{-k}{2}L^2}\right]_{0}^{\infty} + \left[LC \right]_{0}^{\infty} + \frac{1}{k}\int_{0}^{\infty}  e^{\frac{-k}{2}L^2}dL - \left[ LC \right]_{0}^{\infty} \right)$$

We have already evaluated

$$\int_{0}^{\infty}  e^{\frac{-k}{2}L^2}dL = \sqrt{\frac{\pi}{2k}}$$

$$ J = 2\left( \left[ \frac{-L}{k} e^{\frac{-k}{2}L^2}\right]_{0}^{\infty} + \frac{1}{k}\sqrt{\frac{\pi}{2k}}  \right)$$
$$ J = 2\left( \left[ \frac{-L}{k} e^{\frac{-k}{2}L^2}\right]_{0}^{\infty} + \frac{1}{k}\sqrt{\frac{\pi}{2k}}  \right)$$

$$ J = 2\left( lim_{L->\infty}\left( \frac{-L}{k} e^{\frac{-k}{2}L^2}\right)  - \left(\frac{-(0)}{k} e^{\frac{-k}{2}(0)^2}\right)  + \frac{1}{k}\sqrt{\frac{\pi}{2k}}  \right)$$

$$ J = 2\left( \frac{1}{k}\sqrt{\frac{\pi}{2k}}  \right)$$

$$ J = \left( \frac{2\sqrt{\pi}}{k\sqrt{2k}}  \right)$$

$$\sigma^2 = \sqrt{\frac{k}{2\pi}}\left( \frac{2\sqrt{\pi}}{k\sqrt{2k}}  \right)$$

$$\sigma^2 = \frac{2\sqrt{\pi}\sqrt{k}}{k\sqrt{2k}\sqrt{2\pi}} $$

$$\sigma^2 = \frac{2\sqrt{\pi}\sqrt{k}}{k\sqrt{2}\sqrt{2}\sqrt{\pi}\sqrt{k}} $$

$$\sigma^2 = \frac{1}{k} $$

$$k = \frac{1}{\sigma^2} $$

Back to our P.M.F

$$ p(x) = \sqrt{\frac{\frac{1}{\sigma^2}}{2\pi}} e^{\frac{-\frac{1}{\sigma^2}}{2}(x - \mu)^2}  $$

$$ p(x) = \sqrt{\frac{1}{2\pi\sigma^2}} e^{\frac{-1}{2\sigma^2}(x - \mu)^2}  $$
