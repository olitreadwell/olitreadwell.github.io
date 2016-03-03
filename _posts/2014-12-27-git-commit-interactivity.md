---
layout: post
title: "Git Commit Interactively"
---

`git commit -p` is a great tool to help you create a more cohesive, readable git history.  Use of a line-/chunk-specific commit option will assist in any necessary git transformations. I recently learned about GitX and `git commit -p` as two interactive options.

At Union Metrics, I welcomed the feedback  about the visual Git tools available. GitX, GitX-Dev (rowanj), SourceTree, and GitHub Mac were options that I found.

## GitX

One of my coworkers gave me a quick run through on [GitX](http://gitx.frim.nl/), once I installed it. I've learned a little big more about it as I've continued

### Visual Commit & Branch History

![Visual Commit History](/public/assets/img/visual-git-history.jpg)

With GitX targeting a repo, you see the full git commit and branch history. If you haven't looked at this in this way before, it's pretty interesting . Great way to assist in grasping how a repo's git history  grows over time.

### Interactive Staging & Commits

![Interactive Git Commits](/public/assets/img/interactive-commits.jpg)


The interactive commit view show the files that changed since your last commit, in the bottom left corner. In the bottom center, is a text box for your commit message.

As you select a file, you will see the code that changed in the top part of the window. Here you can stage the entire file, specific chunks, and single lines to your next commit. The file where you staged changes to commit then appears in the bottom right corner. You can decide to unstage files, chunks and lines in much the same way.

When you're ready to commit, double check you're on the right branch.  The branch name is helpfully listed on the title bar of the application window. Complete your commit message and click the easy to find commit button.


----------------------------------------------------------

Asking people's preferences for Git tools, many people suggested that I use the interactive commit option already baked within Git itself.

## `git commit -p`

The `-p` stands for patch.  Git commit patch is just one tool. You can find other similar features to what's available in GitX within your own `bash` prompt.

### Visual Commit & Branch History

(reference: [Stack Overflow - Unable to Show a Git Tree in Terminal](http://stackoverflow.com/questions/1064361/unable-to-show-a-git-tree-in-terminal))

<figure>
  <img src="http://i.stack.imgur.com/gTXgj.png">
  <figcaption><a href="http://gitready.com/intermediate/2009/01/26/text-based-graph.html">Image Source - git ready: text-based graph</a></figcaption>
</figure>

`git log --graph --pretty=oneline --abbrev-commit` is a clean way of getting to see the SHA, git message, and the visual graph all at once. (reference: http://git-scm.com/docs/git-log)

`--graph`: This option adds a graph of commit history on the left side of the output

`--pretty[=<format>]`: Prints the commit logs in a given format. It allows for multiple format types, specified in the docs.

`--abbrev-commit`:  Cuts the number of SHA digits shown. `--abbrev=<n>` allows you to choose the number of shown SHA digits.

<i>Update</i>

`--oneline`: This is shorthand for "--pretty=oneline --abbrev-commit" used together.

### Interactive Staging & Commits

(reference: [Git Tools: Interactive Staging](http://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging))

`git commit -p` is my go-to tool for interactive, cohesive commits within my terminal.

``` bash
diff --git a/lib/simplegit.rb b/lib/simplegit.rb
index dd5ecc4..57399e0 100644
--- a/lib/simplegit.rb
+++ b/lib/simplegit.rb
@@ -22,7 +22,7 @@ class SimpleGit
   end

   def log(treeish = 'master')
-    command("git log -n 25 #{treeish}")
+    command("git log -n 30 #{treeish}")
   end

   def blame(path)
Stage this hunk [y,n,a,d,/,j,J,g,e,?]?
```

Using this option, you see what lines have changed since your prior commit. Type `?` to see what you can do next. You choose from the following actions:

``` bash
Stage this hunk [y,n,a,d,/,j,J,g,e,?]? ?
y - stage this hunk
n - do not stage this hunk
a - stage this and all the remaining hunks in the file
d - do not stage this hunk nor any of the remaining hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```

Using `yes` or `no` to stage chunks of your code,  you can make bite-sized, understandable commit messages. Staging only the desired parts of code as you go.

I like to make use of the `s` option, this shrinks the sizes of the patches that you want to commit.

Two things to note:

1. You can stage individual lines and customize even further, with the `e` option. I haven't explored this myself.

2. Depending on your `git config` , the `git commit` message prompt will appear in your  preferred text editor. At times this can lead to an aborted commit (reference: [Aborting Commit Due to Empty Commit Message](http://stackoverflow.com/questions/9725160/aborting-commit-due-to-empty-commit-message))


----------------------------------------------------------

Choose your own favorite, or like I do, use them together.  There are other options still available that I haven't looked into. Let me know via email if there are others you think that I should try or would like.

Thanks for reading.
