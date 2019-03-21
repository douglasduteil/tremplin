ARG DOCKER_REGISTRY_IMAGE=socialgouv/tremplin
ARG DOCKER_IMAGE_TAG

FROM $DOCKER_REGISTRY_IMAGE/base-dependencies:$DOCKER_IMAGE_TAG as builder

USER node

ENV TMP_DEPS /tmp/deps
ENV PACKAGES_APP_DIR packages/app

COPY --chown=node:node ${PACKAGES_APP_DIR} ${TMP_DEPS}/${PACKAGES_APP_DIR}
RUN cd $TMP_DEPS/$PACKAGES_APP_DIR && yarn build

FROM node:10.15-jessie

ENV TMP_DEPS /tmp/deps
ENV PACKAGES_APP_DIR packages/app

WORKDIR /app

COPY --from=builder $TMP_DEPS/$PACKAGES_APP_DIR/.next .next
COPY --from=builder $TMP_DEPS/$PACKAGES_APP_DIR/static static
COPY --from=builder $TMP_DEPS/$PACKAGES_APP_DIR/node_modules node_modules
COPY --from=builder $TMP_DEPS/$PACKAGES_APP_DIR/package.json /app/package.json
COPY --from=builder $TMP_DEPS/$PACKAGES_APP_DIR/next.config.js /app/next.config.js

ENTRYPOINT [ "yarn", "start"]
