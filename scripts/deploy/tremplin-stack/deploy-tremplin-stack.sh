#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}")"

docker-compose -f ./tremplin-stack.compose.yml up
