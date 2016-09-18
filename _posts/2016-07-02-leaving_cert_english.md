---
title: "Leaving Cert English for Efficent People"
layout: single
excerpt: "What to do when you want to do as little as possible"
sitemap: false
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

The Leaving Cert is the most important examinations that Irish secondary school students have to take. I decides what college course that you get accepted into based on your best 6 subjects. Click [here](https://www.cao.ie/index.php?page=scoring&s=lcepointsgrid) to learn more.

Many people take English at Higher level but as a subject it is a major time sink, so I was curious how little work I could put into the exam using mathematics.
## _Defining the problem:_

In English Paper 2 there is a studied poetry section where out of a designated list of 8 poets. 4 appear and you must answer on one of these. However to account for every eventuality you must study 5 poets, you would often here of many people only studying 4 poets going into an exam saying it is unlikely that all 4 wont come up.

### How unlikely is it?
Take that there is 8 poets = {A,B,C,D,E,F,G,H}
And you have studied = {A,B,C,D}
The only way the exam could contain no poet you have studied is if it was  {E,F,G,H} . Order doesn't matter for this problem

But how many ways in total is there of picking the exam? There is a very handy mathematical function to help you with this. Its called N choose K. It is defined as $\binom{n}{k}$ or $\frac{n!}{k! (n-k)!}$

For our problem we want to know $\binom{8}{4}$ which is equal to 70. So the chance that you would be left high and dry is $1/70$ or about $1.42\%$, a chance many would be willing to take.

That interesting but as I want to do as little work as possible, how low can you go?
The reason there was only one way to pick a the poets that you couldn't do if you had studied 4 is as follows: There is 4 you haven't studied and the exam contains 4 poets, so 4 choose 4 equals 1.

How bad would it be if we were feeling even lazier and went with only learning 3 poets?
That would be $\binom{5}{4} / \binom{8}{4} = 5/70$ or $7.14\%$. Higher risk certainly but not absurdly high.

Can we go lower and still have be chance of catastrophe being acceptable?
From the table it is obvious that studying any more than 5 poets is redundant.

|Number of poets you studied|Formula|Percent chance of no poet you have studied coming up|
| ------------- | ------------- |------------- |
|8 poets|$$\binom{0}{4} / \binom{8}{4} = 0/70$$|$0\%$|
|7 poets|$\binom{1}{4} / \binom{8}{4} = 0/70$|$0\%$|
|6 poets|$\binom{2}{4} / \binom{8}{4} = 0/70$|$0\%$|
|5 poets|$\binom{3}{4} / \binom{8}{4} = 0/70$|$0\%$|
|4 poets|$\binom{4}{4} / \binom{8}{4} = 1/70$|$1.42\%$|
|3 poets|$\binom{5}{4} / \binom{8}{4} = 5/70$|$7.14\%$|
|2 poets|$\binom{6}{4} / \binom{8}{4} = 15/70$|$21.42\%$|
|1 poet|$\binom{7}{4} / \binom{8}{4} = 35/70$|$50\%$|
|0 poet's|$\binom{8}{4} / \binom{8}{4} = 70/70$|$100\%$|


These calculations presume that all poets are equally likely to come up however this is obviously not going to be true all the time, anniversaries awards etc will skew these results.
