---
layout: post
title: "How to write a great pull request"
---

This post was originally a TweetStorm. [Read that tweetstorm](https://twitter.com/olitreadwell/status/731291849873195009?ref_src=twsrc%5Etfw).

<hr>

## Why you should write great pull requests

Having strong git skills are essential as a developer. Leveling up these skills involves a diverse set of talents.

One area where I feel there's room for easy improvement is within contextual and descriptive pull requests.

By including additional context you make the life of those reviewing your pull request easier, enabling faster and better code review.

## What to include

In my pull requests I like to include a lot context. This would include some of the following headers:

**1. A link to the ticket**

This is always helpful as a way to connect the different methods of communication that your company uses within your Product Development teams.

**2. A description of the ticket**

Explain potential changes in the code or away from the original intent of the story.

This may be a synthesis of offline discussions you had surrounding the code you wrote. It could include what decisions were made, or realizations come to surrounding necessary codebase changes.

**3. Why you made these changes**

I like think of this from a users perspective. This could look like a User Story

"A User should be able to do X"

Again this creates further clarification around the purpose for this pull request, which can result in stronger suggestions from those reviewing your code. Potentially even highlighting miscommunication or stimulating debate around what the original ticket was supposed to mean.

**4. How you went about changing this functionality**
This could be said to be redundant due to your great git history but including it here prevents some simple context switching between the git history and your PR documentation.

**5. Risk**

Risk involved with this pull request. Are you changing the primary login or payment gateway? Well let's make sure this doesn't blow up

_Not to belabor a point, but you can also include_

**6. QA plan**

**7. Links to documentation/specs**

**8. Links to what you used as a model**

**9. Screenshots**

**10. If it's a Partial PR include, To-Do's that you're working toward**

These are all useful things to include, and will hopefully make suggestions against your pull request easier.

Luckily, Github has taken the steps to allow repo administrator the ability to [add pull request and issue templates](https://github.com/blog/2111-issue-and-pull-request-templates) to their repo's consider including this in your company's repo.

Consider using the raw version of the [template](https://gist.github.com/olitreadwell/294ab1c2ddea61c86027ec70501a5802) I included for a starting point on your repo's PR template.

## Inciting discussion on your Pull Request

After opening the pull request it's important to get feedback on it.

Rather than making people give you suggestions, include comments and questions about things or thoughts you had while writing this PR.

_Could this have been done better?_

_I thought to add another test here._

_Should I raise an error here?_

_Could this query be faster/simpler?_

I've also done these as notes within the code itself, just as a way to keep track of my thoughts while writing the code itself. For these internal notes, I'll highlight them by including a PR Line Note referencing my comment or further explaining my comment.

This engages your reviewer so they'll go ahead and answer questions rather than just giving you a :shipit: also you'll learn!

Next, be sure to let your team know there's a PR up and you'd like a review. Maybe even assign or mention specific domain experts.

Open the original ticket and link to your PR and then move your story along in the pipeline, if that's in your org's process.

Now.. Bask in the glory of a PR well done before going to back to share the wealth and reviewing someone else's pull request.

## Additional Resources

1. [Template for writing a great PR](https://gist.github.com/olitreadwell/294ab1c2ddea61c86027ec70501a5802)

2. [Issue and Pull Request templates](https://github.com/blog/2111-issue-and-pull-request-templates)
