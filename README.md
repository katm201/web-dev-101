# Web Dev 101

This is a companion repo to a training created to teach the basics of web development to non-technical folks.

### Challenges

When first getting started learning to code, it can be hard to know where to start and what resources are out there. Specifically, there are often issues around:

1. Online tutorials don’t include usually include setup or tools
1. Online tutorials either assume a level of base knowledge or are so limited in scope that they don’t show how the topic is connected to others
1. You don’t know what you don’t know

### Goals

The goals of the workshop for which this repo is a companion are:

1. Learn about setup and tool basics
1. Establish a mental model of the web development ecosystem
1. Learn about common engineering choices and their tradeoffs
1. Know where to find additional resources or help

The ultimate goal is to provide enough _context_ that the non-technical person can start the process of self-learning and discovery without the need for a formal course structure.

### Limitations

Some things it doesn't cover:

1. Syntax specifics
1. General coding practices or principles
1. Deployment or dev ops
1. Networking specifics

All of these are important for web developers to know, but are either good areas for self study or too far outside what's practical to learn as a beginner.

### Getting Started

The repo exists in 10 branches, each of which correspond to a section of the slides. To look at a particular branch, you type the following into a terminal from the repo's root directory:

```sh
git checkout <branch_name>

# example
git checkout 01-html
```

If you're viewing this online in Github, you can change the branch from the dropdown menu to the top left.

To run and view this locally, you'll need `git`, `node`, and a text editor installed on your computer.

### Table of Contents

These are the branch names followed by a description of what's included:

1. `01-html`:
    - a simple HTML file, displaying the tree-like structure of web pages
    - includes styling added to a tag's style attribute
    - can view the file in the browser to see what renders
1. `02-stylesheet`
    - adds a CSS file, linking it to the HTML file
    - shows how styles are added via tag types, classes, and ids to structural elements
    - can view the file in the browser to see changes
1. `03-javascript`
    - adds a JS file, linking it to the HTML file
    - adds interactivity, including a console message and changes to what's displayed in the browser based on user interaction
    - can view the file in the browser to see changes
1. `04-node`
    - separates the code into 2 main directories: client and server
    - client code contains all the files from #1-3
    - server code contains files to spin up the server, handle routes, and manage requests
    - now a real web app--spin up the server with `node server/index.js` in the terminal from the repo's root directory
    - view by navigating to `localhost:3000` in the browser
1. `05-state`
    - allows storage of the strings on the server, so they don't get wiped when the browser is refreshed
    - restarting the server will reset them
1. `06-filesystem`
    - persists the strings from #5 throughout server restarts by writing them to a file
1. `07-cdn`
    - loads a Google font by linking to a remote codebase in the HTML file
1. `08-npm`
    - sets up a package manager, npm
1. `09-libraries`
    - adds a library to make saving strings with characters like spaces better
1. `10-frameworks`
    - adds the Express framework for NodeJS to streamline the handling of routes and files
