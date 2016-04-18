---
layout: page
title: Portfolio
---

## [Songs by Sinatra](https://songs-by-sinatra-olitreadwell.herokuapp.com/)
![Songs by Sinatra Screenshot](/public/assets/img/songs-by-sinatra-screenshot.png)

Songs by Sinatra is an application that I built following the guided tutorial within [Jump Start Sinatra](http://shop.oreilly.com/product/9780987332141.do) by Darren Jones. It is built with **Ruby**, **Sinatra**, **SASS/SCSS**, **HTML**, **Slim** templating and **PostgreSQL**. I hosted the application with **Heroku**.

You can view the full *Jump Start Sinatra* repo I created [here](https://github.com/olitreadwell/jump-start-sinatra/tree/master/songs-by-sinatra).

## [Increment Counter with AJAX](https://increment-counter-with-ajax.herokuapp.com/)
![Increment Counter with AJAX](/public/assets/img/increment-counter.gif)

I built this increment counter with **Ruby**, the **Sinatra** framework, **JavaScript**, and **jQuery**. There's a **PostgreSQL** database to store the value of the counter. I use an **AJAX** request to asynchronously increase the value of the counter without refreshing the page. The application is hosted with **Heroku**.

You can view the full *Increment Counter with AJAX* repo I created [here](https://github.com/olitreadwell/increment-counter-with-ajax/).

## [Movie Search with jQuery AJAX](https://movie-search-with-jquery.herokuapp.com/)
![Movie Search with jQuery AJAX](/public/assets/img/movie-search-jquery.gif)

I built this movie search app with **Ruby**, the **Sinatra** framework, **JavaScript**, and **jQuery**. I'm using the **HTTParty** gem to hit the Open Movie Database API. Additionally, using the **JSON** gem I'm able to parse the returned information from my HTTP Get request and display it through additional **jQuery** magic. I use an **AJAX** request to asynchronously retrieve, parse, and display the search results from the Open Movie Database API. The application is hosted with **Heroku**.

You can view the full *Movie Search with AJAX and jQuery* repo I created [here](https://github.com/olitreadwell/movie-search-app/).

## [Dungeons and Dragons Initiative Order (beta)](dnd-initiative-order)
![Dungeons and Dragons Initiative Order (beta)](/public/assets/img/dnd-initiative-order-beta.png)

This is something I quickly built. It's sorta silly. It allows you to add a D&D Character Name and D&D Initiative Roll and then have it appear in a sortable list. It's also mobile friendly. I've recently added the ability to delete an added Character Name and Initiative Roll. Additionally, there are simple validations on this page, such that if you try to submit the form without both inputs filled in it will show a pop-up. The code is written entirely in **HTML**, **CSS**, **JavaScript** and **jQuery**. It also makes use of **HTML Boilerplate**, **Bootstrap**, and **jQuery-UI**.

You can view the full *Dungeons and Dragons Initiative Order (beta)* code I created [here](https://github.com/olitreadwell/olitreadwell.github.io/tree/master/portfolio/dnd-initiative-order/).

## [Sailing Toward (alpha)](sailing-toward)
![Sailing Toward (alpha)](/public/assets/img/sailing-toward.gif)

I wanted to build something with a cool "full-screen", yet **responsive** looping atmospheric gif. In this case I used the **HTML5 video tag** with the loop and autoplay attributes. It's using a CSS transition with a Bezier curve ease timing to increase the opacity of the black overlay. As of now there is a hidden centered form on this page. I am trying to get the form to also transition in at about the 75% mark of the prior transition to have this cool dual transition. It's not working as of the moment.

The site currently has Bootstrap that I'm not really using. The load time on the page isn't that fast and I haven't tested this on mobile yet. I'm assuming I'll need to adjust the default image and the way the transitions work otherwise it'll have a shoddy experience.

You can view the full *Sailing Toward (alpha)* code I created [here](https://github.com/olitreadwell/olitreadwell.github.io/tree/master/portfolio/sailing-toward/).
