---
title: "The Complexity of Matrix Multiplication"
date: 2020-10-13T13:40:05+01:00
draft: false
libraries:
- katex
---



Matrix Multiplication is something which you may never really have considered too much, it is how we calculate the composition of 2 linear transformations. The algorithm is pretty simple and doesn't seem inefficient in any real way. However there is quite a bit more than meets the eye to this.


# Definition

We will be considering the following linear maps


$L_A : W \rightarrow U, L_B :   V  \rightarrow W, L_C : V \rightarrow U$

$n = dim(W), m = Dim(V), p= \dim(U)$

We want to find $L_C = L_A \circ L_B$, in particular we actually want to compute the matrix $C$ that represents $L_C$ from the matrices $A,B$.

## Starting point
The method for matrix multiplication we all know is as follows.

$c_{ij} = \sum_{k=1}^n a_{ik}b_{kj}$

To compute each entry of $C$, we perform $n$ multiplications and $n-1$ additions. We must do this for all $m \times p$ entries of $C$. So we have $npm$ multiplications and $(n-1)mp$ additions.

This leads to an algorithm with computational complexity of $O(n^3)$ for multiplication of 2 $n \times n$ matrices.

There doesn't seem to really be any redundant calculations, but actually improvements on this exist.


## Stratten's Algorithm

Strattens Algorithm was the first sub-cubic complexity algorithm for matrix multiplication. We can write matrix multiplication as $8$ sub-matrix multiplications and $4$ matrix additions. This algorithm is also $O(n^3)$, we can quite easily prove this.


$$\begin{aligned}\begin{bmatrix} C_{1,1} & C_{1,2} \\ C_{2,1} & C_{2,2} \end{bmatrix} &= \begin{bmatrix} A_{1,1} & A_{1,2} \\ A_{2,1} & A_{2,2} \end{bmatrix} \begin{bmatrix} B_{1,1} & B_{1,2} \\ B_{2,1} & B_{2,2} \end{bmatrix} \\ 
 &= \begin{bmatrix} A_{1,1}B_{1,1} + A_{1,2}B_{2,1} & A_{1,1}B_{1,2} + A_{1,2}B_{2,2} \\ A_{2,1}B_{1,1} + A_{2,2}B_{2,1} & A_{2,1}B_{1,1} + A_{2,2}B_{2,2} \end{bmatrix} 
\end{aligned}$$

Strattens Algorithm works by instead of doing $8$ sub matrix multiplications it does $7$, this is in exchange for more additions.

The matrix multiplications are defined as follows.

$$\begin{aligned}
M_1 &= (A_{1,1} + B_{2,2})(B_{1,1} + B_{2,2}) \\
M_2 &= (A_{2,1} + A_{2,2})B_{1,1} \\
M_3 &= A_{1,1}(B_{1,2} - B_{2,2}) \\
M_4 &= A_{2,2}  (B_{2,1} - B_{2,2}) \\
M_5 &= (A_{1,1} + A_{1,2})B_{2,2} \\
M_6 &= (A_{2,1} - A_{1,1})(B_{1,1} + B_{1,2}) \\
M_7 &= (A_{1,2} - A_{2,2})(B_{2,1} + B_{2,2})
\end{aligned}$$


The we have 

$$\begin{aligned}
C_{1,1} &= M_1 + M_4 - M_5 + M_7 \\
C_{1,2} &= M_3 + M_5 \\
C_{2,1} &= M_2 + M_4 \\
C_{2,2} &= M_1 - M_2 + M_3 + M_6
\end{aligned}$$

We can verify that this holds by matrix algebra is quite easily, and them find that the complexity of the algorithm is $O(n^{\log_2(7)})$.

This is ... deeply unsatisifiying, atleast to me. The seemingly arbitrary matrix products don't really seem to give any insight as to what is occurring and why it is better than the naive approach.

A linear transformation is completely defined by its actions on a basis, in this case the basis is of size $n$. Computing each of the transformations on the basis seperately takes $O(n^2)$ operations. So we are somehow taking advantage of some inherent structure in matrix multiplication to be able to calculate this using a sub-cubic algorithm.

We wish to determinine the smallest $\omega$ such that matrix multiplication is $O(n^\omega)$

But what structure? Is there similarly sequence of $6$ sub-matrix multiplications that we can use to create an even better matrix multiplication algorithm?


## Tensors and Multi-linear Maps

Matrices represent linear maps from one vector space to another. Matrix Multiplication takes 2 linear maps, and maps this to another one, lets call this mapping $MM$.

More formally.


$L_A : W \rightarrow U, L_B :   V  \rightarrow W, L_C : V \rightarrow U$

$$MM : (W \rightarrow U) \times (V  \rightarrow W) \rightarrow ( V \rightarrow U)$$


Each of these linear maps are themselves elements of a vector space.

$$MM_{V,W,U} : A \times B \rightarrow C, A \in L(W,U), B \in L(V,W), C \in L(V,U)$$

We have $\lambda C = (\lambda A)B = A(\lambda B), \lambda \in F$. This means that our mapping $MM$ is bilinear in its 2 inputs.


__Note: From here on out we will pretty much be be working with the case of multiplying 2 n*n matrices over the same field. 
In the spirit of this we can instead write our Tensor as $\langle n \rangle$ if all dimensions are equal or $\langle m,n,p \rangle$, where $F$ is our field and $m,n,p$ are the dimensions we are working over, we will call this space $V$__



### Tensors

A bit of an introduction to tensors for anyone who hasn't seen them before. 

We define a tensor of $T$ over vector spaces $\{V_1,\ldots,V_n\}$ over a common field $F$ as follows

$$T : V_1 \times \ldots \times V_n \rightarrow F $$

__Note: more restrictive versions of this definition exist where the vector spaces used are restricted to multiple copies of a vector space and its dual__

$T$ is a multi-linear map, it is linear in each of its inputs.

By fixing a basis for $\{V_1,\ldots,V_n\}$ we get a multidimensional array $d$ of dimensions $n$, with the entries of this array being elements of $F$.


$$T = \sum_{u=1}^{\dim V_1} \ldots \sum_{w=1}^{\dim V_n} d_{u \ldots v} {x}_u \otimes \ldots \otimes z_w$$.

where $\{x, \ldots, z\}$ are the corresponding basis for the vector spaces.

---

Using this form we can rewrite the matrix multiplication tensor as 

$$\langle m,n,p \rangle =  \sum_{i=1}^{m} \sum_{j=1}^{p} \sum_{k=1}^{n}  a_{ik} \otimes b_{kj} \otimes c_{ij}$$




We have now shown that we can talk about matrix multiplication as a multi-linear map (bi-linear) and in turn a tensor, which is cool I guess but seems like quite a tangent.


## A theorem approaches


The tensor representation seems a bit of of left field, however by using this we can bring some powerful maths tools to bear. But before we can do this, we unfortunately need more definitions.

First we will need to define what the rank of a tensor is.


It is the minimum number of rank 1 tensors required to represent our tensor.
$$rk(t) = min_R st \sum^R_{r=1} \lambda_r a_{1,r} \otimes \ldots a_{M,r} $$


The border rank is then minimum rank of a sequence of tensors of which the limit is is the tensor in question.

Clearly we have $brk(t) \leq rk(t)$, as the sequence which is just the tensor with its rank $r$ decompisition repeated gives a feasible border rank of $r$

We also have the simple result that $rk(t) \leq \prod^M_{i=1} dim(V_i)$. We get this by creating a rank 1 tensor corresponding to the each of the basis vector of each constituent vector space.

## Restrictions

Rank and border rank of tensors are unfortunately not (yet) as well understood as the rank of matrices. However even without complete results, we can make some progress.

### Useful facts
- The number of elementary multiplications required for a bilinear map (which matrix multiplication is), is tightly bounded by the rank of the corresponding tensor.
- The rank of a tensor product is sub multiplicative.


The first of these is very useful, it shows that attempting to bound the rank of the matrix multiplication tensor is pretty much exactly what we want to do to determine $\omega$.

The sub-multiplicative result implies that if we can get a good bound on the rank of any $\langle n \rangle$ for a specific $n$ we can use this to bound $\omega$.

We can relate the a specific property of this tensor to our search for efficent ways of multiplying 2 matrices.

## Strassans Theorem

$$ \omega = \lim_{n \rightarrow \infty} \log_n (brk(\langle n \rangle))$$

Where $brk(t)$is the border rank of the tensor.


It has been shown that $rk(\langle 2 \rangle)) = 7$,  this fact and the sub-multiplicity of tensor rank allows us to bound $\omega \leq \log_2(7)$. __This is the same bound we get by using Stattens Algorithm!__


This is actually what Stratten's Algorithm is doing. We are decomposing the $\langle 2 \rangle$ tensor into $7$ rank 1 tensors. The seemingly random matrixes represent this decomposition!


