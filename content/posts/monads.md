---
title: "Monads and Algebra"
layout: single
description: "When you first start working with functional programming, you reach a point where you want to do something with **side-effects**"
sitemap: true
date: 2021-01-01
tags: 
- programming
- algebra
libraries:
- katex
---

When you first start working with functional programming, you reach a point where you want to do something with **side-effects**. Things like IO, network requests etc.

This seems anthitical to much of the ideas of functional programming, to achieve this we are supposed to use __✨Monads✨__.


# Objective

Before we look at the definitions, lets think about what we are trying to achieve. 

Lets think about a simple program with print as our side effect.

## Printing

```haskell
sq :: (Num a) => a -> a
sq x = x*x
```

Lets say that we want to define our function to print the input value and return the result.


Something like this (not valid haskell)
```haskell
sq_p :: (Num a) => a -> a
sq_p x = print x; x*x
```

We haven't captured the side effect of the printing in the type signature. One way to capture this is to return an object representing the side effect.

```haskell
sq_p :: (Num a) => a -> (a, Print a)
sq_p x = (x*x, print x)
```

So this code doesn't actually have side effect, we have instead abstracted out the side effects and returns a value which represents it.

---

So what would happen if we wanted to be able to have multiple prints in our code, lets say we want to call our function twice.

```haskell
f :: (Num a) => a -> a -> (a, Print a)
f x y = let (a,a_p) = sq_p(x)
            (b,b_p) = sq_p(y)
        in (x*y , combine_print a_p b_p )
```

This approach achieves what we want, however you can see how it would very quickly become way too messy to actually maintain. 

Can we use abstraction to clean this up?



# Definition

Below is a (simlpified) haskell definition of a Monad.

```haskell
class Monad m where
  (>>=)  :: m a -> (  a -> m b) -> m b
  (>>)   :: m a ->  m b         -> m b
  return ::   a                 -> m a
```

```haskell
instance Monad Print where
    Print ""  >>= f = 
    (Just x) >>= f = f x
    return x        = Print x
```