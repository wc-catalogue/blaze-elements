#!/bin/bash

(
  git remote set-url origin https://${GH_USERNAME}:${GH_PASSWORD}@github.com/wc-catalogue/blaze-elements.git
  git config user.name "Travis-CI"
  git config user.email "travis@nodemeatspace.com"
  echo "\n" >> ~/.npmrc
  echo "//registry.npmjs.org/:_authToken=$NPM_KEY" >> ~/.npmrc
  npm run build
  npm run semantic-release
)
