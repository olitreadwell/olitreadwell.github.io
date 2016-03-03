---
layout: post
title: "Basics of JavaScript Prototype-based Inheritance (Part 2)"
---
This article is the first in a series of three in which I explain some of what I've learned about JavaScript Inheritance and JavaScript Prototypes.

[Basics of JavaScript Prototype-based Inheritance (Part 1)](/2016/03/02/js-inheritance-pt-1)

[Basics of JavaScript Prototype-based Inheritance (Part 2)](/2016/03/02/js-inheritance-pt-2)

[Basics of JavaScript Prototype-based Inheritance (Part 3)](/2016/03/02/js-inheritance-pt-3)

<hr>

## How does a JavaScript Object inherit from Constructor?

JavaScript is a prototype-based language. By using prototypes we can duplicate behaviors and attributes from existing objects (prototypes). If we would, we can imagine the `prototype` object as a blueprint for your other objects.

Let's see this in action! *Follow along in your node REPL*

First we'll create a constructor function to create a "class".  Now remember that JavaScript doesn't actually have classes.


``` javascript
var Canine = function(latinName) {
    this.genus = "Canis";
    this.latinName = latinName;
}

node  > Canine
node => [Function]
```

Using the `new` keyword we'll create a new instance of this "class"

``` javascript
var dog = new Canine("Canis familiaris");

node  > dog
node => { genus: 'Canis', latinName: 'Canis familiaris' }


var greyWolf = new Canine("Canis lupus");

node  > greyWolf
node => { genus: 'Canis', latinName: 'Canis lupus' }
```

If we want to make it so that all instances of our created "class" can behave in ways that our original "class" can, we'll use the `prototype` object on our original class.

*A little confusing, let's try it out*

``` javascript
Canine.prototype.howl = function () {
    console.log("AAAAWWWOOOOOO");
}

node  > dog.howl();
node => AAAAWWWOOOOOO

node  > greyWolf.howl();
node => AAAAWWWOOOOOO
```

Let's be sure that we can't just add methods and properties to instances of our "class" and have it apply to all instances.

``` javascript
dog.fetch = function() {
    console.log("dog wants to play fetch!");
}

node  > dog.fetch();
node => dog wants to play fetch!

greyWolf.hunt = function() {
    console.log("grey wolf is hunting its prey");
}

node  > greyWolf.hunt();
node => grey wolf is hunting its prey

node  > dog.hunt();
node => TypeError: dog.hunt is not a function

node  > greyWolf.fetch();
node => TypeError: greyWolf.fetch is not a function
```

We've seen the following:

1. how we can use constructor functions to build "classes".

2. How "classes" can create instances of the original object

3. How we can use the `prototype` object to give instances of our JavaScript "class" new methods and properties

Next up, we'll show how JavaScript uses `prototype` and inheritance to create a `Dog` object that inherits from our previously created `Canine` object

#### Play time!

The above code can seem rather confusing at first. You'll feel a lot better about this if you try it yourself.

Why don't you attempt this, but use another friendly creature!

![Petting a Cat](https://upload.wikimedia.org/wikipedia/commons/2/29/Cat.gif)

Go to [Basics of JavaScript Prototype-based Inheritance (Part 3)](/2016/03/02/js-inheritance-pt-3) when you're done.

### Reference & Useful Articles

While writing this series of articles I referenced the following resources:

1. [Simple Inheritance with JavaScript](http://www.sitepoint.com/simple-inheritance-javascript/)
2. [Cory Rylan's JavaScript Prototypal Inheritance](https://coryrylan.com/blog/javascript-prototypal-inheritance)
3. [Douglas Crockford's Classical Inheritance in JavaScript](http://javascript.crockford.com/inheritance.html)
