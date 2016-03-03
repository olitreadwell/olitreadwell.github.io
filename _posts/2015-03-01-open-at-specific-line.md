---
layout: post
title: "Open File at Line Number with Emacs and Vim"
---

Within the last 6 weeks I switched to Emacs as my primary
IDE (interactive development environment). I'm glad I made the change,
I'll write about the challenges of doing so later.

As I improve upon my code-spelunking skills, I received code
references like the one below for errors I was coming upon.

``` bash
$ grep -rn "color" .
./assets/less/site.less:8:  background-color: lighten(@basecolor, 65%);
./assets/less/site.less:9:  color: @basecolor;
./assets/less/typography.less:5:  color: @text-color;
```

After opening up the file in Emacs for the hundredth time, I found
 a way to load the file at the specified code line.


## +1 for Saving Time
(reference: [StackOverflow:Open a file at line with “filename:line” syntax](http://stackoverflow.com/questions/3139970/open-a-file-at-line-with-filenameline-syntax))

Using the code example, loading the appropriate file and line of code is as
 easy as:


``` bash
$ grep -rn "color" .
./assets/less/site.less:8:  background-color: lighten(@basecolor, 65%);
./assets/less/site.less:9:  color: @basecolor;
$
$ emacs +8 ./assets/less/site.less
```

This will work the same way if you're a Vim user too.
``` bash
$ vi +8 ./assets/less/site.less
```

----------------------------------------------------------

Here's a quick trick to finding the offending line of code for an error
or the term you were searching for within your codebase. Give 'it a
shot. Let me know what you think.

If you have any comments, or concerns, feel free to get in touch via twitter.

Follow or tweet me at [@olitreadwell](http://twitter.com/olitreadwell)
