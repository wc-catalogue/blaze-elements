#!/bin/bash

(
 yarn site
 cp assets/blaze-elements-logo.svg tmp/site
 cd tmp/site
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_USERNAME}:${GH_PASSWORD}@github.com/wc-catalogue/blaze-elements.git/" master:gh-pages > /dev/null 2>&1
)
