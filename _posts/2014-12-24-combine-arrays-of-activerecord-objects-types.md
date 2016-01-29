---
layout: post
title: "Combine Arrays of ActiveRecord Objects Types"
---

Today while building out a simple view, I ran into the problem of needing to combine two sets of different Object types together.

For example, I'm building the controller for a combined view for all image and text responses to a blog post

Here's the smelly rendition of my original code
<br>
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = []
  @image_responses = @blog.image_responses.map {|response| response}
  @text_responses = @blog.text_responses.map {|response| response}
  @image_responses.each {|response| @blog_responses.push(response) }
  @text_responses.each {|response| @blog_responses.push(response) }
end
{% endhighlight %}
I put in a rough 30%-done Pull Request for this and received the refactor as feedback from my co-worker.

So the `#map` calls that I'm using really aren't doing much of anything. I used those `#map` calls because previously I was returning a ActiveRecord_Associations_CollectionProxy.

The version of Rails we're using allows for lazy-loading (Reference: [The Odin Project:ActiveRecord Queries](http://www.theodinproject.com/ruby-on-rails/active-record-queries)). To prevent this we can move to use `#to_a` rather than `#map`
<br>
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = []
  @image_responses = @blog.image_responses.to_a
  @text_responses = @blog.text_responses.to_a
  @image_responses.each {|response| @blog_responses.push(response) }
  @text_responses.each {|response| @blog_responses.push(response) }
end
{% endhighlight %}
Now both `@image_responses` and `@text_responses` return arrays. So let's iterate through them after concatenating them to create Array @blog_responses.
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = []
  @image_responses = @blog.image_responses.to_a
  @text_responses = @blog.text_responses.to_a
  (@image_responses + @text_responses).each do |response|
    @blog_responses.push(response)
  end
end
{% endhighlight %}
The goal here is to add all the responses into a single `@blog_responses` array.
<br>
You can do this in one line, like so:
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = @blog.image_responses + @blog.text_responses
end
{% endhighlight %}
This works even with the lazy loading. The reason is that the concatenation of the two queries, forces the query to evaluate, returning the desired collection of objects.

<h4>Before:</h4>
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = []
  @image_responses = @blog.image_responses.map {|response| response}
  @text_responses = @blog.text_responses.map {|response| response}
  @image_responses.each {|response| @blog_responses.push(response) }
  @text_responses.each {|response| @blog_responses.push(response) }
end
{% endhighlight %}
<h4>After:</h4>
{% highlight ruby %}
def show
  @blog = Post.first
  @blog_responses = @blog.image_responses + @blog.text_responses
end
{% endhighlight %}

Much cleaner.
