---
layout: post
title: "Find Last N Database Records"
---

I recently came across a helpful tool for finding ActiveRecord objects using Regular
Expressions or partial strings.

While working in my dev or test environment, I often have to create a new dummy
Account or User object. Every so often, I end up forgetting the exact username
or email for this new object that I created.

Two methods make it easy to gain access to these newly created objects:

1. List N number of records sorted by attribute in descending order
2. [Search Database records using a Partial String](/posts/2015/02/16/partial-match-a-database-object/)

## List N number of records by attribute in descending order
(reference: [StackOverflow:How to get last N records with activerecord](http://stackoverflow.com/questions/420352/how-to-get-last-n-records-with-activerecord))

This is quite the handy trick. If the object you're looking for was recently
created, why not just list the last 10, 30, 50,.. and so on.

{% highlight ruby %}
Record.find(:all, :order => "id desc", :limit => 20).reverse
{% endhighlight %}

Of course, after you access the records you can pretty print or list only the
select attributes to make finding the right ActiveRecord Object easy as.

{% highlight ruby %}
pp Record.find(:all, :order => "id desc", :limit => 20)
         .reverse.map{|record| [record.id, record.created_at]}
{% endhighlight %}

This method is more performant than the second option. You limit the number of
results you search through.


----------------------------------------------------------

Here's one of two different methods for finding recent or specific records in an ActiveRecord
database. Give 'it a shot. Let me know what you think.

If you have any comments, or concerns, feel free to get in touch via twitter.

Follow or tweet me at [@olitreadwell](http://twitter.com/olitreadwell)
