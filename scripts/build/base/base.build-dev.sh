#!/bin/bash

echo "[base dev build] ${APP_STACK_VERSION}"

SCRIPTS_BUILD_MODULE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPTS_BUILD_DIR="$( cd "$( dirname "${SCRIPTS_BUILD_MODULE_DIR[0]}" )" && pwd )"
SCRIPTS_DIR="$( cd "$( dirname "${SCRIPTS_BUILD_DIR[0]}" )" && pwd )"
ROOT_DIR="$( cd "$( dirname "${SCRIPTS_DIR}" )" && pwd )"

source $SCRIPTS_BUILD_DIR/stack.env.sh
if [[ $? -ne 0 ]] ; then
    exit 1
fi

for i in "$@"
do
    case $i in
         --push=*)
            EU_DOCKER_PUSH="1"
            shift # past argument=value
        ;;
         --registry-image=*)
            REGISTRY_IMAGE="${i#*=}"
            shift # past argument=value
        ;;
         --quiet)
            EU_DOCKER_BUILD_QUIET="--quiet=true"
            shift # past argument=value
        ;;
        *)
            # unknown option
            echo
            echo ""
            echo "[ERROR] Unknown option "${i}""
            echo ""
            exit 1
        ;;
    esac
done

MODULE_NAME=base
IMAGE_NAME=$REGISTRY_IMAGE/$MODULE_NAME

echo ""
echo "###########################################"
echo ""
echo "# BUILD:"
echo ""
# docker pull node:$NODE_VERSION_MAJOR.$NODE_VERSION_MINOR
docker build $EU_DOCKER_BUILD_QUIET -t=$IMAGE_NAME -f /$SCRIPTS_BUILD_MODULE_DIR/${MODULE_NAME}.build-dev.dockerfile /$SCRIPTS_BUILD_MODULE_DIR
if [[ $? -ne 0 ]] ; then
    exit 1
fi
docker tag $IMAGE_NAME $IMAGE_NAME:$APP_STACK_VERSION

if [ "$EU_DOCKER_PUSH" == "1" ]
then
  echo "###########################################"
  echo ""
  echo ""
  echo "# DOCKER PUBLISH ALL: "
  echo "# $IMAGE_NAME:latest "
  echo "# $IMAGE_NAME:$APP_STACK_VERSION "

  docker push $IMAGE_NAME:latest
  docker push $IMAGE_NAME:$APP_STACK_VERSION
  if [[ $? -ne 0 ]] ; then
    exit 1
  fi
else
echo "###########################################"
  echo ""
  echo ""
  echo ""
  echo "To publish, run:"
  echo ""
  echo "docker push $IMAGE_NAME:$APP_STACK_VERSION && docker push $IMAGE_NAME:latest"
  echo ""
  echo "###########################################"
  echo ""
fi
