#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not setting up release"
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'release-testing' ]]; then

  toolbelt/publish.sh && toolbelt/deploy.sh

fi
