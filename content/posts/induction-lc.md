---
title: "Induction for the Leaving Cert"
date: 2020-04-13T14:07:33Z
draft: true
libraries:
- katex
- viz
tags:
- leaving-cert
- maths
---

This is going to be possibly the first in a series of posts primarily aimed at for leaving cert students who are currently missing out on school due to COVID-19 but still have exams.

These will be aimed at helping you to understand a concept so you don't need to rely on rote learning (I always found that quite difficult personally)

## Proof by Induction

Proofs are core to maths and are a reasonably reliable part of the Leaving Cert Maths papers.

The most varied type of proof that you will get are the __proofs by induction__.

### Intuition

Often when induction is being explained to students (or being rushed through :/) the idea of induction itself isn't properly separated from a specific way of writing an inductive proof. The idea itself is super powerful and actually quite simple.


Lets take the following as an example. We want to show that something is true  
$1 + 3 + \ldots + (2n-1) = n^2$ for all the natural numbers.
Or we could say it like this if you like using the more formal maths notation
$\forall n \in \mathbb{N}:1 + 3 + \ldots + (2n-1) = n^2$

How can we show this for all of the natural numbers? We know that there is an infinite number of them, so even if we tested for the first $100$ numbers there could be a bigger number that we just haven't tested that it could be false for.


### Induction

__Note:__ As far as I can tell from checking the syllabus weak induction is the only form of induction needed for the leaving certificate. From here on out I will just call it induction.

The idea behind induction is that we solve the problem in 2 different parts.

We have the statement $P(n)$, which we are trying to show is true. For example if we are using the example above:
$P(n) : 1 + 3 + \ldots + (2n-1) = n^2$

For a specific value of $n$ this statement is going to be true or false. And this can simply be checked by calculating both sides and checking if they are equal.

In the first part we come up with a proof for showing that if $P$ is true for a specific number $k$ that we can show that it is true for $k+1$.
Or in more formal maths terms we want a proof of $P(k) \implies P(k+1)$

Lets call this "sub proof" the ___inductive step___.

In the second part we show that our problem is true for a specific number $s$. This is showing that $P(s)$ is true. This can be as simple as calculating what the statement says is equal and just checking. Lets call this part of the proof ___base case___.

Then we can combine these 2 parts to show that $P(s)$ is true for all numbers $\geq s$.

Using the fact that $P(s)$ is true and $P(k) \implies P(k+1)$ we get that $P(s+1)$ is true. We can repeat this to get that $P(s+2),P(s+3),\ldots$ are all true.

We can visualise this with the following diagram.
Each dot is a something we have shown is true, the arrows indicate how we have show it to be true.
```viz-dot
digraph induction {
    rankdir=LR;
    node [shape = circle];
    b [label="P(s)"]
    b1 [label="P(s+1)"]
    b2 [label="P(s+2)"]
    b  -> b1 [ label = "Inductive Step" ];
    b1  -> b2 [ label = "Inductive Step" ];
    node [shape = point];
    b2 -> b3[ label = "I.S" ];
    a -> b [ label = "Base Case" ];
}
```

This is what induction is, the particular way you write it shouldn't matter too much.

Notice how the arrows follow a nice line with no loops? This makes the argument sensible, if you make a mistake and in your argument and the implication arrows form loops your "argument is going around in circles".

__Aside:__ Not needed for leaving certificate but strong induction is when that graph we just drew would be more complicated, but still with no loops. Imagine if your proof for the next case to be true relied on both of the previous values being true.

```viz-dot
digraph induction {
    rankdir=LR;
    node [shape = circle];
    b [label="P(s)"]
    b  -> b2 [ label = "Inductive Step" ];
    b1 [label="P(s+1)"]
    b2 [label="P(s+2)"]
    b1  -> b2 [ label = "Inductive Step" ];
    node [shape = point];
    b2 -> b3[ label = "Inductive Step" ];
    a -> b [ label = "Base Case" ];
    c -> b1 [ label = "Base Case" ];
}
```

### How to write an inductive proof

With the understanding of what induction is and how it works under our belts lets see how to write a proof. While the induction is reasonably straightforward, it builds quite a bit on writing of other types of proofs and algebra so it might be worth revising those if you are finding this part tough.

We will use the example problem from above in this example.
#### Step 1: Write down you problem

While this might seem stupid to put as its own step this is where I see most people go wrong, you don't want to be stuck on a problem because you took it down wrong.

To prove: $\forall n \in \mathbb{N}:1 + 3 + \ldots + (2n-1) = n^2$

#### Step 2: The inductive step

We assume that $P(k)$ is true, from this we need to show that $P(k+1)$ is true.

$$
1 + 3 + \ldots + (2k-1) = k^2  \tag{P(k)}
$$


$$\begin{aligned} 1 + 3 + \ldots + (2k-1) + (2k+1) &= 1 + 3 + \ldots + (2k-1) + (2k+1) \\\ 1 + 3 + \ldots + (2k+1) &= k^2 + (2k+1) \\\ 1 + 3 + \ldots + \left(2(k+1)-1\right) &= (k+1)^2 \\\ \end{aligned}$$

We have now shown that $P(k) \implies P(k+1)$, we have now completed the inductive step.

#### Step 3: The base case

We simply need to test that $P(1)$ is true.

$$
1 = 1^2 \tag{True}
$$

We have now completed the base case.

#### Step 4: Putting it together

As induction is widely understood we don't need to explain it when we use it.

 $P(1)$ is true and $P(k) \implies P(k+1)$ therefore by induction $P(n)$ is true for all $n \in \mathbb{N}$


### Conclusion

I hope that this has been helpful to you and if you have any questions or any other topics you would like me to cover you can message me at @john_pryan on twitter.
