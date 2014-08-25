#!/bin/bash

if [[ "$TRAVIS_TAG" ]]; then
    rm -rf build
    npm run dist
    zip floating-memo-osx.zip -r build/floating-memo/osx
    zip floating-memo-win.zip -r build/floating-memo/win
    zip floating-memo-linux32.zip -r build/floating-memo/linux32
    zip floating-memo-linux64.zip -r build/floating-memo/linux64
fi