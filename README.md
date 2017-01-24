# Blaze Elements

<img alt="Blaze Elements Logo" src="https://wc-catalogue.github.io/blaze-elements/blaze-elements-logo.svg" width="400">

[Blaze CSS](http://blazecss.com/) wrapped using [Web Component](http://webcomponents.org/)

[PROJECT STATUS](https://github.com/wc-catalogue/blaze-elements/milestones)

[![Build Status](https://travis-ci.org/wc-catalogue/blaze-elements.svg?branch=master)](https://travis-ci.org/wc-catalogue/blaze-elements)
[![npm version](https://badge.fury.io/js/blaze-elements.svg)](https://badge.fury.io/js/blaze-elements)

[![Build Status](https://saucelabs.com/browser-matrix/elmariofredo.svg)](https://saucelabs.com/beta/builds/de2a9d3d2222445290dd8e29ba80de84)


## Quick start

> @TODO

## Installing individual components

> @TODO

## Including components

> @TODO

---

## Usage within frameworks

### React

> @TODO

### Preact

> @TODO

### Angular >=2

> @TODO

---

## Development

### Setup the repo:

```bash
git clone https://github.com/wc-catalogue/blaze-elements && cd $_ && yarn
```

### Run the development server for all packages:

```bash
yarn start

open http://localhost:8080
```

### Run the development server for particular package:

```bash
cd packages/<elemenet-directory>

yarn start

open http://localhost:8080
```

### Test all packages:

```bash
# for running test once
yarn test

# for running tests in watch mode
yarn test:watch

# for running tests in watch mode for firefox only
yarn test:watch:firefox
```

### Production Build
```bash
yarn build
```

### Publish to npm

> NOTE: This section is for collaborators only. Contributors without repo write access can ignore this section.

To release **blaze-elements**, you should perform the following steps:

> @TODO

---

## Packaging

### `bl-button`

#### Installing

`yarn add bl-button`

will contain 2 bundles:

1. `index-with-dependecies.min.js` - minified and bundled all `dependencies` of bl-button + skatejs ( without polyfills )
2. `index.min.js` - just minified implementation of `bl-button` , skatejs and all dependecies should be loaded via specific `imports` ( without polyfills )

and generated type definitions with JSX.Intrinsic element plugin for specific custom element

So shiped package structure should look like:

```
bl-button/
 |-- index.min.js  * compiled Button with customElements.define
 |-- index.min.js.map
 |-- index.d.ts
 |-- index-with-deps.min.js * compiled Button bundled with Skate and all `dependencies` and `customElements.define`
 |-- index-with-deps.min.js.map
 |-- Button.js * compiled Button for custom WC registration
 |-- Button.d.ts
 |-- README.md
 |-- package.json
```

#### Usage:

1. within any app ( PHP, Ruby, JSP, plain HTML, whatever... )

```html
<html>
<head>
  <script src="node_modules/skatejs-web-components/dist/index-with-deps.min.js"></script>
  <script src="node_modules/bl-button/index-with-deps.min.js"></script>
  <script src="node_modules/bl-calendar/index-with-deps.min.js"></script>
</head>
<body>
  <bl-button>Hello</bl-button>
  <bl-calendar></bl-calendar>
</body>
</html>
```

2. within SPA with bundler ( webpack )
```html
<html>
<head>
  <script src="bundle.min.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

```ts
// CustomButton.tsx
import {Button, ButtonProps} from 'bl-button/Button';

declare global {
  namespace JSX {
    interface IntrinsicElement {
      'my-button': ButtonProps
    }
  }
}
customElements.define('my-button',Button);

// main.ts
import 'skatejs-web-components';
import 'skate';

import 'bl-button';
import 'bl-calendar';
import 'bl-input';

import * as React from 'react';
import {render} from 'react-dom';

// add custom namespaced button button
import './CustomButton';

const mountPoint = document.getElementById('app');
const App = () => (
  <div>
    <h1>Hello world</h1>
    <form>
      <bl-input value="hello" onInput={console.log}></bl-input>
      <bl-calendar></bl-calendar>
      <bl-button type="submit">Submit</bl-button>
      <my-button>Im custom yo!</my-button>
    </form>
  </div>
)

render(<App/>, mountPoint);
```
