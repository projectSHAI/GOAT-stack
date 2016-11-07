![Main Banner](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/GOAT-banner.jpg?raw=true)

> Version 1.0.0

___
###Table of Contents

1. [What's new?](#whatsnew)
2. [Follow the GOAT](#followtheGOAT)
3. [Problem](#problem)
4. [Solution](#solution)
5. [Technologies used to build the GOAT stack](#allTech)
  * [Main Technologies](#tech)
  * [Integrated Libraries and Modules](#libs)
6. [Documentation](#docs)
7. [Required Technologies for your Development Environment](#reqs)
8. [Quick Start](#quickstart)
  * [Windows](#windows)
  * [Linux](#linux)
9. [Support The GOAT](#supportGOAT) 
10. [Made with GOAT stack](#madewith)
11. [Contributing](#contributing)
12. [Creators](#creators)

<a name="whatsnew"></a>
#What's new?

 December 1st - This is launch day, the GOAT Stack is finally closing in on release!
 
 The final items left on our todo list are polishing items, these incluede:
 - ~~Implementation of AOT(Ahead-of-Time) rendering.~~
 - Finishing the Demonstration webapp.
 - Creating thourough, and well structured documentation.
 - Finishing our [Facebook page](https://www.facebook.com/goatstack/).
 - Finishing our [Reddit page](https://www.reddit.com/r/GOATStack/).
 - Making sure SEO and webcrawlers are optimized.
 - making sure all the Goat's are well fed and happy!
 
<a name="followtheGOAT"></a>
#Follow the GOAT

If you like our Fullstack make sure to stay informed and [get involved!](#contributing) 

Follow us on [Facebook page](https://www.facebook.com/goatstack/) to receive the latest news and updates!

# [![Facebook Page][FacebookBanner]](https://www.facebook.com/goatstack/)

If you don't end up not liking the GOAT Stack, that's ok too! Please drop by our [Reddit page](https://www.reddit.com/r/GOATStack/) and tell us why! We're always interested in new points of view, even the greatest can get better! 
# [![Reddit Page][RedditBanner]](https://www.reddit.com/r/GOATStack/)


![Houston we have a problem](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/Houston-we-have-a-problem-banner.jpg?raw=true)

<a name="problem"></a>
#Problem

<img src="https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/critical-space-ship.png?raw=true" align="right">

1. Page load speed 
 * 40% of users leave a webpage that takes more than 3 seconds to load
2. Scaleability
 * If resources are static a webapp will waste a lot of efficiency when load is low, or become crippled by a sudden surge of traffic 
3. User engagement
 * stuff

___
___
___
___
___
___
___
___
___
___
___

<a name="solution"></a>
#Solution

<img src="https://github.com/JCThomas4214/Documentation/blob/master/GOAT/assets/optimized-space-ship.png?raw=true" align="right">
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___
___

<a name="allTech"></a>
# Technologies used to build the GOAT stack
<a name="tech"></a>
## Main Technologies

# [![MongoDB Logo][MongoDB]](https://www.mongodb.com/)[![ExpressJS Logo][ExpressJS]](http://expressjs.com/)[![Angular2 Logo][Angular2]](https://angular.io/)[![NodeJS Logo][NodeJS]](https://nodejs.org/en/)

[MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com/), [Angular2](https://angular.io/), and [Node.js](http://www.nodejs.org/) are the primary technologies utilized in this purpose built stack. Inspired by [MeanJS](https://github.com/meanjs/mean) and [AngularFullstack](https://github.com/angular-fullstack/generator-angular-fullstack), GOAT has been built to give you an organized and efficient way to start developing secure MEAN web apps with scalability, and efficiency in mind.

#### MongoDB
MongoDB is an open sourced database which uses a flexible document data model, similar to JSON. Instead of using tables and rows, MongoDB uses key-value pairs to achieve faster, more efficient querying capabilities than a relational database. This flexibility allows development teams to evolve the data model rapidly as their application requirements change. 

> Read the [MongoDB documentaion](https://docs.mongodb.com/) in order to get a better understanding to how this scaleable database can benefit your team!

#### Express.js
Express.js is a web application framework for Node.js this framework comes with a robust set of HTTP utility's and middleware aimed at helping you develop stable, efficient, and predictable API's quickly, and easily. This framework takes the focus off of boilerplate code, and let's the developer focus on more important design aspects such as data flows.

> Read the [Express.js documentation](http://expressjs.com/en/api.html)  in order to get a better understanding on how to responsibly manage, and direct data from one point to another in a secure, and efficient manner.

#### Angular2
Angular2 is a frontend framework which aims to close the gap between native application and website. 

> Read the [Angular2 documentation](https://angular.io/docs/ts/latest/) in order to get a better understanding on how to create a seamless user experience which feels more like a native app.

#### NodeJS
Node.js is a javascript server that is runtime built and runs on [Chrome's V8 Javascript engine](https://developers.google.com/v8/)

We chose Node.js for two reasons:

1. Node.js uses something called the event-driven model, it is a non-blocking I/O model, which is depicted below.
2. Node.js uses [npm](https://www.npmjs.com/). [npm](https://www.npmjs.com/) is the largest package ecosystem in the world, meaning there are countless open sourced libraries your team can capitaliize on to accomplish your goals and realize your visions.

![The EventDriven model](http://image.slidesharecdn.com/nodejsslideshare-121104022408-phpapp01/95/nodejs-event-driven-concurrency-for-web-applications-51-638.jpg?cb=1351996088)

> Read the [Node.js documentation](https://nodejs.org/en/docs/) in order to get a better understanding on how to utilize this server to make your website lightweight and efficient.

<a name="libs"></a>
## Integrated Libraries and Modules

[![Redux Logo][Redux]](http://redux.js.org/)[![Immutable Logo][Immutable]](https://facebook.github.io/immutable-js/)[![SocketIO Logo][SocketIO]](http://socket.io/)[![Mongoose Logo][Mongoose]](http://mongoosejs.com/)[![Passport Logo][Passport]](http://passportjs.org/)[![Jasmine Logo][Jasmine]](http://jasmine.github.io/)[![Karma Logo][Karma]](https://karma-runner.github.io/1.0/index.html)[![Protractor Logo][Protractor]](http://www.protractortest.org/#/)
___

GOAT includes the [Redux](http://redux.js.org/) architechture, [Immutable](https://facebook.github.io/immutable-js/) data structuring, [SocketIO](http://socket.io/), [Mongoose](http://mongoosejs.com/), [Passport](http://passportjs.org/), [Jasmine](http://jasmine.github.io/), [Karma](https://karma-runner.github.io/1.0/index.html), and [Protractor](http://www.protractortest.org/#/) out of the box. These extra libraries have been added to address common boilerplate needs; such as server and client testing, user login, authentication, and communication between client and server, etc.

#### Redux
Explanation and resources
#### Immutable
Explanation and resources
#### SocketIO
Explanation and resources
#### Mongoose
Explanation and resources
#### Passport
Explanation and resources
#### Jasmine
Explanation and resources
#### Karma
Explanation and resources
#### Protractor
Explanation and resources

<a name="docs"></a>
# Documentation

  * [Server-Side](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/server-side.md)
  * [Client-Side](https://github.com/JCThomas4214/Documentation/blob/master/GOAT/client-side.md)

<a name="reqs"></a>
# Required Technologies for your Development Environment

  * [gulp](http://gulpjs.com/) (standard privileges required)
  * [typescript](https://www.typescriptlang.org/)
  * [nodejs](https://nodejs.org/en/)
  * [mongodb](https://docs.mongodb.com/)

<a name="quickstart"></a>
# Quick Start
<a name="windows"></a>
## Windows

### 1) Install [Git](https://git-scm.com/downloads)
  * Note: You may need to configure system PATH to appropriate git command

### 2) Install [NodeJS](https://nodejs.org/en/)
  * Note: You may need to configure system PATH to appropriate node command

### 3) Install [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
  * Note: You may need to configure system PATH to appropriate mongod command

### 4) Install [Python](https://www.python.org/downloads/release/python-2712/) and C++ compiler
  * Note: Installing [Visual Studios Community](https://www.visualstudio.com/downloads/) will be a sufficiant compiler

### 5) Clone and Run

```sh
$ git clone https://github.com/projectSHAI/GOAT-stack # or clone your own fork
$ cd GOAT-stack
$ npm install -g gulp-cli typescript
$ npm install
$ # mongod runs as a child process!
$ gulp
```

<a name="linux"></a>
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
$ git clone https://github.com/projectSHAI/GOAT-stack # or clone your own fork
$ cd GOAT-stack
$ npm install -g gulp-cli typescript
$ npm install
$ # mongod runs as a child process!
$ gulp
```

<a name="supportGOAT"></a>
#Support the GOAT

<a name="madewith"></a>
#Made with GOAT Stack

Goatstack.com


<a name="contributing"></a>
#How to contribute

<a name="creators"></a>
#Created By

##[Jason Thomas](https://github.com/JCThomas4214)

##[Christopher Haugen](https://github.com/projectSHAI)

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



<!-- logo tags -->
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
