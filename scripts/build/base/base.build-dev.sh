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
        --docker-node-image=*)
            DOCKER_NODE_IMAGE="${i#*=}"
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
DOCKER_IMAGE_NAME=$REGISTRY_IMAGE/$MODULE_NAME

echo "DOCKER_IMAGE_NAME: ${DOCKER_IMAGE_NAME}"

echo ""
echo "###########################################"
echo ""
echo "# BUILD:"
echo ""

docker build --build-arg DOCKER_NODE_IMAGE=$DOCKER_NODE_IMAGE -t=$DOCKER_IMAGE_NAME -f /$SCRIPTS_BUILD_MODULE_DIR/${MODULE_NAME}.build-dev.dockerfile /$SCRIPTS_BUILD_MODULE_DIR
if [[ $? -ne 0 ]] ; then
    exit 1
fi

docker tag $DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME:$APP_STACK_VERSION

if [ "$EU_DOCKER_PUSH" == "1" ]
then
  echo "###########################################"
  echo ""
  echo ""
  echo "# DOCKER PUBLISH ALL: "
  echo "# $DOCKER_IMAGE_NAME:latest "
  echo "# $DOCKER_IMAGE_NAME:$APP_STACK_VERSION "

  docker push $DOCKER_IMAGE_NAME:latest
  docker push $DOCKER_IMAGE_NAME:$APP_STACK_VERSION
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
  echo "docker push $DOCKER_IMAGE_NAME:$APP_STACK_VERSION && docker push $DOCKER_IMAGE_NAME:latest"
  echo ""
  echo "###########################################"
  echo ""
fi
