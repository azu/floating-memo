#!/bin/bash

if [[ "$TRAVIS_TAG" ]]; then
    rm -rf build
    npm run dist
    zip -q floating-memo-osx.zip -r build/floating-memo/osx
#    zip -q floating-memo-win.zip -r build/floating-memo/win
#    zip -q floating-memo-linux32.zip -r build/floating-memo/linux32
#    zip -q floating-memo-linux64.zip -r build/floating-memo/linux64
    echo "ziped!"
fi