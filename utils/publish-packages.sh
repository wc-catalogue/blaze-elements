#!/bin/bash

(
  echo "//registry.npmjs.org/:_authToken=$NPM_KEY" >> ~/.npmrc
  npm version patch
  npm publish
  lerna publish -y
)
