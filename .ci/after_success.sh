#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing"
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then

  # Release to npm
  npm run semantic-release

  # Publish to github pages
  yarn site
  cp assets/blaze-elements-logo.svg tmp/site
  cd tmp/site
  git init
  git add .
  git commit -m "Deployed to Github Pages"
  git push --force --quiet "https://github.com/wc-catalogue/blaze-elements.git/" master:gh-pages > /dev/null 2>&1

fi
