# Code Cracker

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

- Express.js as web server
- MongoDb as database
- React.js via Create React App for front end
- TypeScript for type safety
- Tailwind CSS for styling, with daisyUI as component library

For collaboration, the following tools will be used

- Slack for communication
- GitHub for code collaboration
- Jira for project management

## Development

For first time setup run `npm run install` to install all dependencies and generate the client build.

Go to the `server` directory and follow the instructions in the `readme.md` file to install the server.

For development, from the root directory run `npm run dev` to start the development server. This uses `tmux` to start in parallel the front end and back end servers in a split terminal. The front end server will be available at `http://localhost:3000` and the back end server at `http://localhost:3001`. In this mode, the front end server will serve the react app and the back end server will serve the API anod other static assets.

For production, run `npm run start` which will start the back end server and serve the front end assets from the `build` directory.

## Types

The top level `types` directory contains all the types shared between the front end and back end. In there, a base type is defined for each entity,as single source of truth. The rest of subtypes refer to the base type.
