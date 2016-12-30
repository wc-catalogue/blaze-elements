#!/bin/bash

set -e

if [ "${CI}" = "true" ]
then

  xvfb-run wct

  if [ "${TRAVIS_PULL_REQUEST}" = "false" ]
  then
    wct --plugin sauce -s 'default'
  fi

else

  wct

fi
