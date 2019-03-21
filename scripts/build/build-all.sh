#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"

./base/base.build-dev.sh --registry-image=socialgouv/tremplin

./base-dependencies/base-dependencies.build.sh  --version=latest

./api-build/api.build.sh  --version=latest

./app-build/app.build.sh  --version=latest
