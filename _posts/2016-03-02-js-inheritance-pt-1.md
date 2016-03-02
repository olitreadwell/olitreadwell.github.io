---
layout: post
title: "Basics of JavaScript Prototype-based Inheritance (Part 1)"
---
This article is the first in a series of three in which I explain some of what I've learned about JavaScript Inheritance and JavaScript Prototypes.

Feel free to skip ahead!

[Basics of JavaScript Prototype-based Inheritance (Part 2)](/2016/03/02/js-inheritance-pt-2)

[Basics of JavaScript Prototype-based Inheritance (Part 3)](/2016/03/02/js-inheritance-pt-3)

<hr>

## How does JavaScript do Inheritance?

JavaScript as a loosely-typed dynamically-typed language gives us a alternative method for Inheritance when compared to languages such as Java, C, or Ruby.

If you're familiar with Ruby, then you know that it utilizes a Class Inheritance paradigm. JavaScript is a class-free object-oriented language. JavaScript is instead an object and prototype based, object-oriented language.

Before we dive into that though, let's try to answer...

## Why is Inheritance important?

Here are 2 Specific Reasons why Inheritance is Important.

1) Ensuring that our programming Language chooses the right *type* for *casting*.

  In strongly typed languages--we'll use C for example--a [type](https://en.wikipedia.org/wiki/C_data_types) refers to variable indicators that determine the traits of the data that may be stored or interacted with.

  That's a little obtuse.

  You can use the `char` data type, which may refer to a String of characters making up a user's name. You may have an `int` data type, which refers to Integers that might be your user's age.

  [Type Casting](https://en.wikipedia.org/wiki/Type_conversion) is when we change from one data type to another. Say we convert the `int` data type to a `char` data type.

  In JavaScript, which is a loosely-typed language, references to objects or more simply put variables do not use type casting.

2) Making it easy to reuse code.

  We often create more than one object that uses the same or similar methods. In Ruby, Classes make it easy to create new instances from one set of instructions.

``` ruby
class Cat < Mammal

end
```
*With this Ruby example, Cat will inherit properties from the Mammal Class*

JavaScript's prototypal inheritance is considered by some to be even more useful. [1](http://www.crockford.com/javascript/inheritance.html)

Hopefully, that cleared up some basic questions about why we want to use languages that implement some form of inheritance.

Go to [Basics of JavaScript Prototype-based Inheritance (Part 2)](/2016/03/02/js-inheritance-pt-2) once you feel comfortable with what we just went over.

### Reference & Useful Articles

While writing this series of articles I referenced the following resources:

1. [Simple Inheritance with JavaScript](http://www.sitepoint.com/simple-inheritance-javascript/)
2. [Cory Rylan's JavaScript Prototypal Inheritance](https://coryrylan.com/blog/javascript-prototypal-inheritance)
3. [Douglas Crockford's Classical Inheritance in JavaScript](http://javascript.crockford.com/inheritance.html)
