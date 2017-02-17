#!/bin/bash

(
  git remote set-url origin https://${GH_USERNAME}:${GH_PASSWORD}@github.com/wc-catalogue/blaze-elements.git
  git config user.name "Travis-CI"
  git config user.email "travis@nodemeatspace.com"
  echo "\n" >> ~/.npmrc
  echo "//registry.npmjs.org/:_authToken=$NPM_KEY" >> ~/.npmrc

  # Build & release whole package
  npm run build
  cd ./packages/blaze-elements
  npm run semantic-release
)
