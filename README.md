# [Skeleton-Sass](http://getskeleton.com)

Skeleton-Sass is the (un)official Sass version of [Dave Gamache's](https://twitter.com/dhg) Skeleton Framework. It currently featues a stable version of Skeleton 2.0.4

-----

Skeleton is a simple, responsive boilerplate to kickstart any responsive project.

Check out <http://getskeleton.com> for documentation and details.

## Getting started

### Install Global Dependencies
  * [Node.js](http://nodejs.org)
  * [bower](http://bower.io): `[sudo] npm install bower -g`
  * [grunt.js](http://gruntjs.com): `[sudo] npm install -g grunt-cli`

### Install Local Dependencies
  * [Download zip](https://github.com/whatsnewsaes/Skeleton-Sass/archive/master.zip), [clone the repo](github-mac://openRepo/https://github.com/whatsnewsaes/Skeleton-Sass) or `bower install skeleton-scss` from your terminal
  * cd to project folder
  * run `[sudo] npm install` (first time users)
  * run `grunt` (to watch and compile sass files)

### What's in the download?

The download includes Skeleton's CSS, ~~Normalize CSS as a reset,~~ a sample favicon, and an index.html as a starting point.

```
skeleton/
├── index.html
├── scss/
│   └── skeleton.scss
├── images/
│   └── favicon.png
├── package.json
├── Gruntfile.js
└── README.md

```

### Contributions
The goal of Skeleton-Sass is to have a mirrored Sass repository of Skeleton. In order to keep the integrity of the original Skeleton framework, I cannot accept any features or functionality outside the original implementation of [Dave Gamache's](https://twitter.com/dhg) [Skeleton Framework](https://github.com/dhg/Skeleton). If you would like to see features, functionality, or extensions outside of the original please make a PR / or issue on the original skeleton framework.

If you have sass improvements, additional mixins, or other helpful sass techniques that stay within the original codebase. Feel free to make a pull request!

### Why it's awesome

Skeleton is lightweight and simple. It styles only raw HTML elements (with a few exceptions) and provides a responsive grid. Nothing more.
- Minified, it's less than a kb
- It's a starting point, not a UI framework
- ~~No compiling or installing...just vanilla CSS~~

## How it's used on Matt Clark's website

1. Edit files from the src directory
1. Run grunt (you may need to add a --force option for some unknown reason)
1. Do something to update gh-pages

DONE!
