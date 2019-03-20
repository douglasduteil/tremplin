#!/bin/bash

./base/base.build-dev.sh

./base-dependencies/base-dependencies.build.sh  --version=latest

./api-build/api.build.sh  --version=latest

./app-build/app.build.sh  --version=latest
