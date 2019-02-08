# Web Dev 101

This is a companion repo to a training created to teach the basics of web development to non-technical folks.

## Why & What

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

## Getting Started

### How to Navigate

The repo exists in 10 branches, each of which correspond to a section of the slides. To look at a particular branch, you type the following into a terminal from the repo's root directory:

```sh
git checkout <branch_name>

# example
git checkout 01-html
```

If you're viewing this online in Github, you can change the branch from the dropdown menu to the top left.

To run and view this locally, you'll need [`git`](#setup-git), [`node`](#install-node), and a [text editor](#install-a-text-editor) installed on your computer.

### Setup Git

To install git on your computer, follow the instructions at this [link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), based on your operating system.

Once git is installed, open your terminal, navigate to the directory where you want to store you local version, and execute the following command:

```sh
git clone https://github.com/katm201/web-dev-101
```

That will create a directory called `web-dev-101`, which you can then navigate into.

### Install Node

First, install [Homebrew](https://brew.sh/)--use the instructions specific to your operating system. Homebrew is a package manager that will install Node and all of its dependencies for you. It's a handy tool that you can also use for installing programs like MySQL.

Once Homebrew is installed, execute the following command in the terminal:

```sh
brew install node
```

To check that it's worked, you can type `node -v` or `which node` to see what version is installed or where the program files are located.

### Install a Text Editor

There are tons of text editors out on the market, each with its own features and benefits. Of what's currently on the market, I'd recommend [VSCode](https://code.visualstudio.com/), Microsoft's free, open source text editor. It's available for all major operating systems and has a vibrant ecosystem and community behind it.

Follow the instructions at the link to download and set it up.

### Table of Contents

These are the branch names followed by a description of what's included for each:

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
