ARG BASE_IMAGE_VERSION
ARG DOCKER_REGISTRY_IMAGE=socialgouv/tremplin

FROM $DOCKER_REGISTRY_IMAGE/base-dependencies:$BASE_IMAGE_VERSION  as builder

USER node

ENV TMP_DEPS /tmp/deps
ENV PACKAGES_API_DIR packages/api

COPY --chown=node:node ${PACKAGES_API_DIR} ${TMP_DEPS}/${PACKAGES_API_DIR}
RUN cd $TMP_DEPS/$PACKAGES_API_DIR && yarn build

FROM node:10.15-jessie

ENV TMP_DEPS /tmp/deps
ENV PACKAGES_API_DIR packages/api

WORKDIR /app

ENV BUILDER_DIST_DIR $TMP_DEPS/$PACKAGES_API_DIR/dist
ENV BUILDER_NODE_MODULE_DIR $TMP_DEPS/$PACKAGES_API_DIR/node_modules

COPY --from=builder $BUILDER_DIST_DIR dist
COPY --from=builder $BUILDER_NODE_MODULE_DIR node_modules
COPY --from=builder $TMP_DEPS/$PACKAGES_API_DIR/package.json /app/package.json

EXPOSE 1337

ENTRYPOINT [ "yarn", "start" ]
