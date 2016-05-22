---
layout: post
title: "Adding `git squash` to my git workflow"
---

This post was originally a TweetStorm. [Read that tweetstorm](https://twitter.com/olitreadwell/status/731291849873195009?ref_src=twsrc%5Etfw).

This post is part of a group I've written about improving your version control skills.

* [Git commiting interactively](http://olitreadwell.com/2014/12/27/git-commit-interactivity)

* [Strategies I use to level-up my git](http://olitreadwell.com/2016/05/22/strategies-to-level-up-my-git)

* [How to write a great pull request](http://olitreadwell.com/2016/05/22/how-write-great-pull-requests)

<hr>

I'm pretty sure that squashing commits is now going to be a part of my git workflow. I've had some serious level ups in my git workflow as I've continued working as a developer. This is definitely one of them.

The habit of regular small (even trivial) commits, was baked into me while going through Dev Bootcamp in Chicago with regular commit intervals on the half hour. I further cemented this by including a tool in my terminal prompt that told me the time since my last commit on my current branch, similar to what @Goles has written here for the [Zsh terminal](https://gist.github.com/Goles/1990882).

![](/public/assets/img/prompt-with-commit-time.png)

*picture credit to Tuo Huang from [this post](http://blog.reigndesign.com/blog/git-tip-show-current-branch-and-time-elapsed-since-last-commit-in-command-line/)*

Eventually I learned of `git commit patch` and Gitx. I previously wrote about [git committing interactively](/2014/12/27/git-commit-interactivity).

Some folks told me I was potentially making my commits too small! This is were `git squash` -ing becomes so useful.

With `git squash` in your VCS toolbelt it doesn't matter that I wrote 1 commit every 30 minutes. Or turned an hour's worth of work into 4 commits. Sometimes that story needs to be editing, which is where `git squash` comes in.

Now after my full git log of commits I can go back and edit.

*Git Commit drink, git squash sober*

`Git squash` allows you to turn the three commits into one for that test you wrote. Or to turn the passing test and the correctly method into one single commit.

Allows you to totally remove an unused piece of git history, like the comment you added asking a question, which was then answered within the code review process on your [great pull request](/2016/05/22/how-to-write-a-great-pull-request).

Allows you to amend the first and second and third of a 30 commit git branch not just the last commit.

You can turn your Hobbit trilogy into the one movie it should've been, without that non-canon love triangle.

![](http://images6.fanpop.com/image/photos/37700000/Kiliel-GIF-the-hobbit-37766271-500-250.gif "What is this slash fic?")

Now you might be asked to do this when contributing to Open Source Software or just opening a pull request against your team's branch or repo.

Git squashing also pairs well with git cherry-picking. They are are similar, yet different skills. So check out git squashing and add it to your repertoire of git skills.

## Additional Resources

1. [Github : @goles zsh_git_timer](https://gist.github.com/Goles/1990882)

2. [Git tip: show current branch and time elapsed since last commit in command line by Tuo Huang](http://blog.reigndesign.com/blog/git-tip-show-current-branch-and-time-elapsed-since-last-commit-in-command-line/)


<hr>

If you enjoyed this post, please [subscribe to my newsletter](http://tinyletter.com/olitreadwell)
