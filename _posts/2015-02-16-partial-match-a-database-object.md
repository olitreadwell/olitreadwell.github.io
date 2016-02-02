---
layout: post
title: "Use Partial String Matching on a Database Object"
---

I recently came across a helpful tool for finding ActiveRecord objects using Regular
Expressions or partial strings.

While working in my dev or test environment, I often have to create a new dummy
Account or User object. Every so often, I end up forgetting the exact username
or email for this new object that I created.

Two methods make it easy to gain access to these newly created objects:

1. [List N number of records sorted by attribute in descending order](/posts/2015-02-16-last-n-database-objects.md)
2. Search Database records using a Partial String

## Search Database records using a Partial String
(reference: [StackOverflow:How can I match a partial string to a database's object's
attribute? Regexp?](http://stackoverflow.com/questions/22596861/how-can-i-match-a-partial-string-to-a-databases-objects-attribute-regexp))

The other option provides a search for ActiveRecord Objects.

<strong>WARNING:</strong>It's worth being aware that this does search <em>ALL</em>
all the records in your database. That takes a lot of power and could end up causing
significant problems for your database.

{% highlight ruby %}
Account.where("email like ?", "%olitreadwell%")
{% endhighlight %}

<strong>OR</strong>

{% highlight ruby %}
User.where("username like ?", "%olitreadwell%")
{% endhighlight %}

If I'm searching for a test User or test Account Object the above queries will
return records where "olitreadwell" appears throughout the desired attribute
string.

Again, this searches all the objects of one type within your database for a string,
making it take a large toll on your database. So use it sparingly.


----------------------------------------------------------

Here's one of two different methods for finding recent or specific records in an ActiveRecord
database. Give it a shot, though carefully. Let me know what you think.

If you have any comments, or concerns, feel free to get in touch via twitter.

Follow or tweet me at [@olitreadwell](http://twitter.com/olitreadwell)
