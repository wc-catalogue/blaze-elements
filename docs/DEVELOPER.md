# Developing Blaze-elements

This project is a multip package monorepo handled by [Lerna](https://lernajs.io/)

This document describes how to set up your development environment to build and test blaze-elements.
It also explains the basic mechanics of using `git`, `node`, `npm`, `yarn`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)
* [Running Tests Locally](#running-tests-locally)

See the [contribution guidelines](https://github.com/wc-catalogue/blaze-elements/blob/master/docs/CONTRIBUTING.md)
if you'd like to contribute to Blaze-elements.

## Prerequisite Software

Before you can build and test, you must install and configure the following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version `>=5.4.1 <6`) which is used to run a development web server,
  run tests, and generate distributable files. We also use Node's Package Manager, `npm`
  (version `>=3.5.3 <4.0`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

* [yarn](https://yarnpkg.com) which is Fast, reliable, and secure dependency management, so it's our prefered way for installing packages instead of slow `npm`.
  You can install it via `npm install -g yarn` or [follow this guidelines](https://yarnpkg.com/en/docs/install)

## Getting the Sources

Fork and clone the Blaze-elements repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [main Blaze-elements
   repository](https://github.com/wc-catalogue/blaze-elements).
3. Clone your fork of the Blaze-elements repository and define an `upstream` remote pointing back to
   the Blaze-elements repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/angular.git

# Go to the blaze directory:
cd blaze-elements

# Add the main Blaze repository as an upstream remote to your repository:
git remote add upstream https://github.com/wc-catalogue/blaze-elements.git
```
## Installing NPM Modules

Next, install the JavaScript modules needed to build and test Blaze-elements:

```shell
# Install Blaze-elements project dependencies (package.json)
yarn
```

## Running the development server

### Run the development server for all packages:

```bash
# from project root
yarn start

open http://localhost:8080
```

### Run the development server for particular package:

```bash
cd packages/<elemenet-directory>

yarn start

open http://localhost:8080
```

## Running Tests Locally

To run tests:

```shell
# from project root
yarn test                   # Run all blaze-elements tests
yarn test:watch             # Run all blaze-elements tests in watch mode ( good for development ) - will run FF,Chrome,Chrome Canary
yarn test:watch:firefox     # Run all blaze-elements tests in watch mode ( good for development ) - will run only FF
```

For particular package:

```shell
cd packages/button
yarn test                   # Run tests only for bl-button
yarn test:watch             # Run tests only for bl-button in watch mode ( good for development ) - will run FF,Chrome,Chrome Canary
yarn test:watch:firefox     # Run tests only for bl-button in watch mode ( good for development ) - will run only FF
```

All the tests are executed on our Continuous Integration infrastructure and a PR could only be merged once the tests pass.

- Travis CI fails if you submit code with Typescript or TSLint errors or any of the test suites described above fails.

## <a name="clang-format"></a> Formatting your source code

Blaze-elements uses [typescript-formatter](https://github.com/vvakame/typescript-formatter) to format the source code.
If the source code is not properly formatted, the CI will fail and the PR can not be merged.

You can automatically format your code by running:

``` shell
$ yarn ts:format
```

and fix autofixable tslint errors by running:

```shell
$ yarn ts:lint:fix
```

## Linting/verifying your source code

You can check that your code is properly formatted and adheres to coding style by running:

``` shell
$ yarn ts:lint
```

## Building

To build whole Blaze-elements suit run:

```shell
yarn build
```

To build just particular Blaze-elements package run:

```shell
cd packages/button
yarn build
```

* Results are put in the dist folder.

### Publish to npm

> NOTE: This section is for collaborators only. Contributors without repo write access can ignore this section.

To release **blaze-elements**, you should perform the following steps:

> @TODO
