#!/bin/bash

(
 cd dist
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_USERNAME}:${GH_PASSWORD}@github.com/wc-catalogue/blaze-elements.git/" master:gh-pages > /dev/null 2>&1
)
