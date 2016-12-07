
![build](https://circleci.com/gh/JCThomas4214/GOAT-stack/tree/helloGOAT.svg?style=shield)
[![Dependency Status](https://img.shields.io/david/projectSHAI/GOAT-stack.svg)](https://david-dm.org/projectSHAI/GOAT-stack/tree/helloGOAT.svg)
[![Dev-Dependency Status](https://img.shields.io/david/dev/projectSHAI/GOAT-stack.svg)](https://david-dm.org/projectSHAI/GOAT-stack/tree/helloGOAT.svg#info=devDependencies)

![Main Banner](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/GOAT-banner.jpg?raw=true)

# Quick Start 

```sh
$ npm install -g yo generator-goat-stack gulp-cli typescript
$ mkdir [dirName] && cd [dirName]
$ yo goat-stack [name?]
$ npm install
$ # mongod in another terminal!
$ gulp
```

# What's new?

Version 1.0.0 is finally here! 
 
CURRENT BUGS!
* AoT compilation
  * angular-compiler 2.2.4 not creating ngFactory files for the main application
  * angular rollback to last working version 2.1.2 
 
Things to look forward too in version 1.1.0:
* Demo site
 * Portrait styling
 * Sky islands
 * Ocean life


# Documentation Wiki

  * [Home](https://github.com/projectSHAI/GOAT-stack/wiki)
  * [FAQ](https://github.com/projectSHAI/GOAT-stack/wiki/FAQ)
  * [Dev-Tools](https://github.com/projectSHAI/GOAT-stack/wiki/Dev-Tools)
  * [Gulp Tasks](https://github.com/projectSHAI/GOAT-stack/wiki/Gulp-Tasks)
  * [Client Side Docs](https://github.com/projectSHAI/GOAT-stack/wiki/Client-Side-Docs)
  * [Server Side Docs](https://github.com/projectSHAI/GOAT-stack/wiki/Server-Side-Docs)
  * [End to End Testing](https://github.com/projectSHAI/GOAT-stack/wiki/End-to-End-Testing)
  * [Client Side Testing](https://github.com/projectSHAI/GOAT-stack/wiki/Client-Side-Testing)
  * [Server Side Testin](https://github.com/projectSHAI/GOAT-stack/wiki/Server-Side-Testing)
 
### **For more information about the stack click [here](https://github.com/projectSHAI/GOAT-stack/wiki)**
___

# Why GOAT-stack?

![Houston we have a problem](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/Houston-we-have-a-problem-banner.jpg?raw=true)

<a name="problem"></a>
## Problem

<img src="https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/critical-space-ship.png?raw=true" align="right">

### 1. Initial page load speed 
 * 40% of users leave a webpage that takes more than 3 seconds to load
 
### 2. Scaleable resources
 * If an App's resources cannot scale with real time user traffic it will crash during traffic spikes, and be wasteful when there is low user activity

### 3. Scaleable Architecture
 * If a program's dataflow is not structured conicously a once easily managed program made of 10,000 lines of code becomes read-only once it reaches 100,000 lines of code. data flows become unruley and nested, and unintended dependencies occur in the application tree. This makes maintainability a mess, and refactoring a nightmare.

### 4. User to User real time interaction
 * User interaction is a key success factor in regards to having a community adopt, and grow wih your projet. The more seamless user interaction with your website, and with each other, the better chance the project has at success.


<a name="solution"></a>
## Solution

<img src="https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/optimized-space-ship.png?raw=true" align="right">

### 1. Initial page load speed 
 * The GOAT stack capitilizes on Angular2's [Ahead-of-Time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) server side rendering. Having the server do the heavy lifting at build time allows us to serve a pre-rendered file to the client. Instantly serving the client a visual while capturing user events which are then que'd up to execute as soon as the app becomes functional further closes the gap between the web and native applications.
 
### 2. Scaleable resources
 * MongoDB fits the developer paradigm very well. with proper [indexing](https://docs.mongodb.com/manual/indexes/) and [schema design](https://docs.mongodb.com/v3.2/core/data-model-design/) daabase response times will be linear, or consant. Also, the apability of [sharding](https://docs.mongodb.com/manual/sharding/) removes the bottle-neck of datasize. 

### 3. Scaleable Architecture
 * [Immmutability](https://en.wikipedia.org/wiki/Immutable_object) makes app data predictable at any scale, and [redux](http://redux.js.org/docs/introduction/) makes dataflow manageble by eliminating many-to-many relationships, this completely eliminates tangled nests of components, making them more modular. Redux places the entire app's [state tree](http://redux.js.org/docs/Glossary.html#state) in one focal area which is the [store](http://redux.js.org/docs/api/Store.html). 

### 4. User to User real time interaction
 * Angular2's [two way data binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way) and [Socket.io](http://socket.io/) is an effective combination. Two way data binding allows real time interaction between the website and a single client without the need for that user to ever reload a page. Socket.io takes this one step further and automatically updates any one user's changes on every other connected device in real time without anyone ever needing to refresh their browser. 
 

# Follow the GOAT

If you like our Fullstack make sure to stay informed and [get involved!](#contributing) 

Follow us on [Facebook page](https://www.facebook.com/goatstack/) to receive the latest news and updates!

[![Facebook Page][FacebookBanner]](https://www.facebook.com/goatstack/)

If you end up not liking the GOAT Stack, that's ok too! Please drop by our [Reddit page](https://www.reddit.com/r/GOATStack/) and tell us why! We're always interested in new points of view, even the greatest can get better! 

[![Reddit Page][RedditBanner]](https://www.reddit.com/r/GOATStack/)


<a name="reqs"></a>
# Required Technologies for your Development Environment

  * [gulp](http://gulpjs.com/) (standard privileges required)
  * [typescript](https://www.typescriptlang.org/)
  * [nodejs](https://nodejs.org/en/)
  * [mongodb](https://docs.mongodb.com/)
  * Your favorite browser
  * [Redux DevTools for Google Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
   * If you would like to develop on a browser which is not Chrome, then disable Redux DevTools, otherwise the app will fail to compile. In your project folder navigate to `app/app.module.ts`, then delete the argument `devTool.enhancer()` inside of the `this.ngRedux.configureStore()` method located in the constructor.

# Installation

## Windows

### 1) Install [Git](https://git-scm.com/downloads)
  * Note: You may need to configure system PATH to appropriate git command

### 2) Install [NodeJS](https://nodejs.org/en/)
  * Note: You may need to configure system PATH to appropriate node command

### 3) Install [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
  * Note: You may need to configure system PATH to appropriate mongod command

### 4) Install [Python](https://www.python.org/downloads/release/python-2712/) and C++ compiler
  * Note: Installing [Visual Studios Community](https://www.visualstudio.com/downloads/) will be a sufficiant compiler
    * if you do not want the full blown Visual Studios IDE then you can also download a standalone version of Visual Studio's build tools [here](http://landinghub.visualstudio.com/visual-cpp-build-tools)
     * Make sure to configure npm to use the correct c++ compiler using the following command `npm config set msvs_version 2015` 2015 is the version linked above, replace this number with your version if it differs. If you still have issues during npm install follow the install instructions [here](https://www.npmjs.com/package/node-gyp) for node-gyp.

### 5) Clone and Run

```sh
$ npm install -g yo generator-goat-stack gulp-cli typescript
$ mkdir GOAT-stack && cd GOAT-stack
$ yo goat-stack [name?]
$ npm install
$ # mongod in another terminal!
$ gulp
```

## Linux

### 1) Install Git

```sh
$ sudo apt-get install git
```

### 2) Install [NodeJS](https://nodejs.org/en/download/package-manager/)

```sh
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

  or 7.x

```sh
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### 3) Install [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)

### 4) Clone and Run

```sh
$ npm install -g yo generator-goat-stack gulp-cli typescript
$ mkdir GOAT-stack && cd GOAT-stack 
$ yo goat-stack [name?]
$ npm install
$ # mongod in another terminal!
$ sudo gulp
```
> Note: gulp needs to be elevated with `sudo`, otherwise the mongod process which is executed in the gulp task runner will throw an error stating the port is already in use, even if it is free. This happens even when running mongod in its own terminal.


## Yo Generator Project [here](https://github.com/JCThomas4214/GOAT-yeoman)

## Created By
 + [Jason Thomas](https://github.com/JCThomas4214)
 + [Christopher Haugen](https://github.com/projectSHAI)

<!--
# Deploying to Heroku

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Heroku Documentation

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
-->



<!-- image references -->
[MongoDB]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/mongo_logo_square.png?raw=true
[ExpressJS]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/expressjs.png?raw=true
[Angular2]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/angular2-logo.png?raw=true
[NodeJS]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/nodejs-logo.png?raw=true
[Redux]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/logo-redux.png?raw=true 
[Immutable]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/Immutable-logo.png?raw=true 
[SocketIO]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/SOCKETIOICON.png?raw=true
[Mongoose]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/mongoose.png?raw=true
[Passport]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/passport.png?raw=true
[Jasmine]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/jasmine.png?raw=true
[Karma]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/karma.png?raw=true
[Protractor]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/protractor-logo.png?raw=true
[FacebookBanner]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/facebook.png?raw=true
[RedditBanner]: https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/Reddit-Logo-Transparent.png?raw=true

<!-- webpage links -->
[Reddit]: https://www.reddit.com/
[Facebook]: https://www.facebook.com/goatstack/
