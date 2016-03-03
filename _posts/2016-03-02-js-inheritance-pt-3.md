---
layout: post
title: "Basics of JavaScript Prototype-based Inheritance (Part 3)"
---
This article is the first in a series of three in which I explain some of what I've learned about JavaScript Inheritance and JavaScript Prototypes.

[Basics of JavaScript Prototype-based Inheritance (Part 1)](/2016/03/02/js-inheritance-pt-1)

[Basics of JavaScript Prototype-based Inheritance (Part 2)](/2016/03/02/js-inheritance-pt-2)

[Basics of JavaScript Prototype-based Inheritance (Part 3)](/2016/03/02/js-inheritance-pt-3)

You can find the code for this series [here](https://gist.github.com/olitreadwell/69172d0591f3daef7fcc).

<hr>

## How does a JavaScript Constructor inherit from another Constructor?

If you'll remember from my last post, JavaScript is a prototype-based language. By using prototypes we can duplicate behaviors and attributes from existing objects (prototypes). If we would, we can imagine the `prototype` object as a blueprint for your other objects.


Let's recap the code we wrote last time.

*Follow along in your node REPL*

``` javascript
var Canine = function(latinName) {
    this.genus = "Canis";
    this.latinName  = latinName;
}

var dog      = new Canine("Canis familiaris");
var greyWolf = new Canine("Canis lupus");

Canine.prototype.howl = function() {
    console.log("AAAAWWWOOOOOO");
}

dog.fetch = function() {
    console.log("dog wants to play fetch!");
}

greyWolf.hunt = function() {
    console.log("grey wolf is hunting its prey");
}
```

This code helps us demonstrate the first usage of `prototype` to help instances inherit methods and properties from its "class" object.

Remember JavaScript doesn't have Ruby-like Classes.

Now that we've established that, let's create a new `Dog` object that inherits from our `Canine` object.

``` javascript
var Dog = function(name, latinName) {
    Canine.call(this, latinName);
    this.name = name;
}

node  > Dog
node => [Function: Dog]
```

We've built another simple `constructor` called `Dog` with a property `name`.

Let's specifically look at this line:


``` javascript
    ...
    Canine.call(this, latinName);
    ...
```

Using `call` sets a value for the `latinName` property for the `Dog` object, in the context of the `Canine` object.

*What does this look familiar to?* This might appear very similar to a super call that we'd see in Ruby.


``` ruby
class Animal
    def move
        "I can move"
    end
end

class Bird < Animal
    def move
        super + " by flying"
    end
end
```

So we can see this in action!

``` javascript
node  > var spot = new Dog('Spot', 'Canis familiaris');
node  > spot
node => { genus: 'Canis', latinName: 'Canis familiaris', name: 'Spot' }
```

So have we successfully inherited from `Canine` yet? Let's see.

``` javascript
node  > spot
node => { genus: 'Canis', latinName: 'Canis familiaris', name: 'Spot' }

node  > spot.howl();
node => TypeError: spot.howl is not a function
```

No, it doesn't look like it.

Alright, enough messing around. How does `Dog` inherit from the `Canine` object? **More Prototypes!**

``` javascript
var Canine = function(latinName) {
    this.genus = "Canis";
    this.latinName  = latinName;
}

Canine.prototype.howl = function() {
    console.log("AAAAWWWOOOOOO");
}

var Dog = function(name, latinName) {
    Canine.call(this, latinName);
    this.name = name;
}

Dog.prototype = Object.create(Canine.prototype);
Dog.prototype.constructor = Dog;

node  > var spot = new Dog('Spot', 'Canis familiaris');
node  > spot
node => { genus: 'Canis', latinName: 'Canis familiaris', name: 'Spot' }

node  > spot.howl();
node => AAAAWWWOOOOOO
```

![Sharpei Puppy Howls at Moon](https://s-media-cache-ak0.pinimg.com/originals/dc/c7/88/dcc788fd81f110df2a349fcd5a8ca2cf.gif)

### AAAWWWOOOOOOOO!!!!

Alright we did it! Wait, what did we do? Let's focus in on the magic.

``` javascript
    ...
    Dog.prototype = Object.create(Canine.prototype);
    Dog.prototype.constructor = Dog;
    ...
```


The `Object.create` call creates a `Dog.prototype` object from the `Canine.prototype` object. `Dog` inherits all the properties and methods from `Canine`.

The second line sets the `Dog.prototype` object's original constructor. Each time you set an object property to inherit from another object, we need to define the constructor for this new object. If we didn't set the following:

``` javascript
    ...
    Dog.prototype.constructor = Dog;
    ...
```

`Dog` would return our initial parent object `Canine`.

Let's make it so all our new `Dog` instances can `fetch`~

``` javascript
var Canine = function(latinName) {
    this.genus = "Canis";
    this.latinName  = latinName;
}

Canine.prototype.howl = function() {
    console.log("AAAAWWWOOOOOO");
}

var Dog = function(name, latinName) {
    Canine.call(this, latinName);
    this.name = name;
}

Dog.prototype = Object.create(Canine.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function() {
    console.log(this.name + ' wants to play fetch!');
}

node  > var spot = new Dog('Spot', 'Canis familiaris');
node  > spot
node  > spot.fetch();
node => Spot wants to play fetch!
```

Any new `Dog` object can now `howl` like any other `Canine` object and play `fetch` like the rest of our `Dog` objects!

#### Play time!

The above code can seem rather confusing at first. You'll feel a lot better about this if you try it yourself.

Why don't you attempt this, but use another friendly creature!

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Turkish_Van_Cat.jpg/700px-Turkish_Van_Cat.jpg" alt="Smiling Cat" style="width: 350px;"/>

### Reference & Useful Articles

While writing this series of articles I referenced the following resources:

1. [Simple Inheritance with JavaScript](http://www.sitepoint.com/simple-inheritance-javascript/)
2. [Cory Rylan's JavaScript Prototypal Inheritance](https://coryrylan.com/blog/javascript-prototypal-inheritance)
3. [Douglas Crockford's Classical Inheritance in JavaScript](http://javascript.crockford.com/inheritance.html)
