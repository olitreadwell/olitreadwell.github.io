---
layout: post
title: 'On Technical Assessments/Code Challenges'
---

I find that coding by myself isn't my preferred method of contributing to coding projects. I really like working with a team, partaking in the code review process, and improving my skills and those of others by working with other engineers.

Through work I've done on code challenges, I have been able to identify ways in which working on a code challenge feels different to me than writing code for a team.

## 1. I am more hesitant to ask questions

My typical coding process includes asking probing questions about the tickets that I am working on.

I've actually come up with a checklist of these questions, I ask myself and I ask the folks who assigned me the work. The questions tend to consist of the following:

- What feature/aspect of this work is of greatest priority?
- What code standards are in place in this repo?
- What's the deadline on this?
- Who are the stakeholders?
- Is there a ticket or card somewhere where I can track my progress of this work?
- Does my manager or lead have a preference in how I implement this?
- Who worked on this or something similar last?
- Are there other examples of this in the code?
- Is there a good pull request to use as a model?
- Is this creating new code or modifying the legacy code?
- Is there documentation for what I'm working on?
- Are there design specifications for what I'm working on?
- Who are the gatekeepers of the repo I'm working in?
- Are there CONTRIBUTING guidelines for the repo I'm working on?

... etc.

Often times in coding challenges, I do not feel I have the opportunity to ask these questions.

For that reason, when I receive coding challenges I like to ask these questions. With the focus being, "Which of these is most important? If I could only deliver one of the asked for criteria within an hour what would it be? What if I could only deliver 2?"

## 2. As a software engineer, my goal is to learn from my team and solicit ongoing feedback.

When working on a coding challenge, particularly one where I'm not embedded in a code review process it feels more difficult to go ahead and get that ongoing feedback.

Within a code review process, I get ongoing feedback on my work in progress and not just the finalized product. While working on a code challenge, it feels much more focused on the end deliverable then how I got there.

I tend to agree with the idea that "software is never finished, only released." In my work this means I balance iterating from an initial idea to a shipped piece of software, knowing that there is usually something I'm not happy with and hope to go back and improve upon.

My hope is that when I get started on a ticket, I will ask questions and from there begin to learn about the code that is present or find examples of this feature elsewhere. I'll delve into where I think this code will go and mock up a simple test of it. Usually, this involves pushing up my current committed code, comments and all, and opening a work in progress branch.

After working on the intial proof of concept, I like to bring my idea to another engineer and chat with them about the work. See if they have any design suggestions or areas they think I'm not considering right off the bat. I think this process prevents me from veering off in the wrong direction early on.

## 3. Invested time versus finished project

When I work on a challenge, it is for a future employer. I feel I am being evaluated on the final bit of work that I am turning in. Not the steps I took to get there. Not the way I communicated about it along the way. Not the decisions I made. Not the research I did. It is not a holistic representation of the way I prefer to code.

Not to forget that time constraints seem to go out the window at this point, even if given a limited time frame on the work.

Would I rather turn in something that feels like not the best representation of my work in 1 hour, 3 hours? Or would I rather spend a greater amount of time and hope that the work looks good enough for the folks evaluating it?

This is a trap. I end up losing myself on smaller problems. I go way over my time. I lose confidence in my capacity to show my best work.

If I was in a production level environment and was told I have 1 hour to deliver something to production, I wouldn't write pretty code, or probably even tests, it wouldn't be accessible, and I would probably ignore most non-critically blocking aspects of a code review. This would be a something is on fire scenario and I would ship something that would "work". I would communicate all of this, including the trade-offs of work of this sort, to my team, in my code, and in my pull request. Once it was delivered and nothing was broken, I'd prioritize following that work up with other improvements. I'd focus on adding tests, refactoring the code to look better, and adding the secondary features that were asked for.

The info above may not change the code that I wrote for a technical challenge. Hopefully, it gives you a clearer insight into the way that I contribute to a team. It also helps me to think about how I will work on technical assessments in the future.
