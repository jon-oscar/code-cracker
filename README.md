# Code Craker

Website link: [https://code-cracker.onrender.com/](https://code-cracker.onrender.com/)

## Summary

A mentoring project and website where users can create and share software engineering interview questions and answers, to be used as portfolio aimed to tech recruiters.

Mentee: [@insert-oreyes](https://github.com/insert-oreyes)
Mentor: [@jportella93](https://github.com/jportella93)

### Goals

- Practice working in a collaborative project with real world tools and workflows
- Practice mentoring
- Practice building RESTful APIs, authentication and full stack tech.
- Aim to present the project as portfolio item for all collaborators

## Deliverables

- A responsive website
- A public git repository, hosted on GitHub

### Website

Multi page website featuring

- A Home page, showing all posted questions
- A Question page, showing that particular question and all user answers to it
- A login/registration page
- An About page, showing information about this project and contact info of authors

User permissions

- CRUD their own user
- CRUD their own questions
- CRUD comments on any question

### Git repository

The public repository for the website is of utmost importance, as it will show tech recruiters the good working practices of the candidate.

All work on this repo will be done using the GitHub workflow, where the remote repository is cloned on each contributor’s computer, and, for each proposed change, the following steps are taken:

1. A local branch is created off a fresh remote main branch
1. Changes are done locally in this new branch
1. When a new change is merged in the remote branch, the local branch is rebased on a fresh copy of remote main branch to keep both branches in sync
1. When all work is completed in the local branch, it is pushed to the remote repository and a pull request to the main remote branch is created
1. Once the pull request is approved by the other author, the branch is merged to the main branch, squashing all the commits into a single commit

## Tooling

Using industry-standard technologies and tools is instrumental for the purpose of this project.

For the website, the following code libraries and frameworks will be used:

- Next.js as web server
- React.js via the Next.js meta-framework
- TypeScript for type safety
- Tailwind CSS for styling, with daisyUI as component library

For collaboration, the following tools will be used

- Slack for communication
- GitHub for code collaboration
- Jira for project management
