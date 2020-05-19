---
title: "Implementing Concurrency"
date: 2020-04-14T13:22:26Z
draft: true
libraries:
- katex
- viz
tags:
- machine learning
---

When writing more performance critical code, sometimes if the problem lends itself to it we can reach into our toolbox use the weapons of concurrency to reach whatever goal we had set for performance.

We normally use abstractions such as threads, messages, semaphores etc to write code that takes advantage of multiple CPU cores without having to deal with the implementation details. The details are normally taken care of by some library we use without considering.

But how do they do it?

We are going to first have a refresher on what features we need to implement to be able to write concurrent code in addition to some definitions.
