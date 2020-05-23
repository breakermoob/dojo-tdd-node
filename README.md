# TDD NodeJs CodeBreaker

Nice proyect with TDD

[![Codeship Status for breakermoob/dojo-tdd-node](https://app.codeship.com/projects/d028f600-7f3c-0138-71e3-068c0ce045b2/status?branch=master)](https://app.codeship.com/projects/397456)

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0


## Install

    $ git clone https://github.com/breakermoob/dojo-tdd-node
    $ cd dojo-tdd-node
    $ npm install

## Run Test

    $ npm test

# API

## Calculator

### Add
    /calculator/add?value1=1&value2=3

### Subtract
    /calculator/sub?value1=1&value2=3

## CodeBreaker

### isPositioned
    /codebreaker/isPositioned?value=0&position=0

### itExist
    /codebreaker/itExist?value=1

### guest
    /codebreaker/guest?value=0123

### setSecret
    /codebreaker/setsecret?value=5987
