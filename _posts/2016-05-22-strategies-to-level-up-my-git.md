---
layout: post
title: "Strategies I use to level-up my git"
---

This post was originally a TweetStorm. [Read that tweetstorm](https://twitter.com/olitreadwell/status/731291849873195009?ref_src=twsrc%5Etfw).

This post is part of a group I've written about improving your version control skills.

* [Git commiting interactively](/2014/12/27/git-commit-interactivity)

* [Adding `git squash` to my git workflow](/2016/05/22/adding-git-squash-to-my-git-workflow)

* [How to write a great pull request](/2016/05/22/how-to-write-great-pull-requests)

<hr>

I've had some serious level ups in my git workflow as I've continued working as a developer.

Currently my git workflow focuses on a few things:

* Small staccato commits that come together to tell a story

* Using feature branches

* Writing great pull requests

## No fear of committing

The habit of regular small (even trivial) commits, was  baked into me while going through Dev Bootcamp in Chicago. This happened because our cohort would inevitable yell out "NIGHTHAWKS COMMIT!" at timed intervals to ensure we were iterating on our Version Control learning.

I then further systematized this by including a tool in my terminal prompt that told me the time since my last commit on my current branch, similar to what @Goles has written here for the [Zsh terminal](https://gist.github.com/Goles/1990882).

![](/public/assets/img/prompt-with-commit-time.png)

*picture credit to Tuo Huang from [this post](http://blog.reigndesign.com/blog/git-tip-show-current-branch-and-time-elapsed-since-last-commit-in-command-line/)*

Eventually I learned of `git commit patch` and Gitx. I previously wrote about [git committing interactively](/2014/12/27/git-commit-interactivity).

Some folks told me I was potentially making my commits too small! Commits tell a story. The story of your feature or your fix. The growth of your skill or your thought process. Sometimes that story needs to be editing, which is why you may want to [add `git squash` to your git workflow](/2016/05/22/adding-git-squash-to-my-git-workflow).

If you're a junior developer, picking up great VCS habits, demonstrates a certain level of skill that gives you an edge over other applicants. If you can show git skills you're a step ahead.

## Where I am today

My current git workflow will involve branching for my feature branch including a long descriptive branch name. This isn't `feature-branch`, its `jira-ticket-123-this-is-what-the-feature-does-simply-branch`.

Start working. Then every 20 minutes, a max of an hour, I'll commit. Usually with `git commit patch` or Gitx. My commits hope to explain **_why_** I made these changes and be less than 80 chars if possible

If I want to add more info, add a new line. With how you did something, though this should likely be evident from your code. Alternatively, you could split that commit into multiple commits.

Push your branch up, this gives it exposure and also helps people who might give it a look-see or to at least show your work. Some teams are comfortable with you opening a partial PR or a 30% PR for feedback or to provide guifance. Of course ask your team.

When you finish your work open a pull request. In my pull requests I like to include a lot context. Read more about [how to write a great pull request](./2016/05/22/how-to-write-great-pull-requests).

All together these allow me to feel confident in my version control capabilities and work better as part of a agile develoment team.

## Additional Resources

1. [Github : @goles zsh_git_timer](https://gist.github.com/Goles/1990882)

2. [Git tip: show current branch and time elapsed since last commit in command line by Tuo Huang](http://blog.reigndesign.com/blog/git-tip-show-current-branch-and-time-elapsed-since-last-commit-in-command-line/)

<hr>

If you enjoyed this post, please [subscribe to my newsletter](http://tinyletter.com/olitreadwell)
