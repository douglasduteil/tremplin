# INSTALL DEPENDENCIES
ARG BASE_IMAGE_VERSION
FROM socialgouv/tremplin-dev-base:$BASE_IMAGE_VERSION

USER node

# first install npm dependencies only (to take benefits of docker cache)

ENV TMP_DEPS /tmp/deps
RUN mkdir -p $TMP_DEPS && cd $TMP_DEPS

ENV DIR_APP ./packages/app
ENV DIR_API ./packages/api

ENV DIR $TMP_DEPS/$DIR_APP
COPY --chown=node:node $DIR_APP/package.json $DIR/package.json
COPY --chown=node:node ./yarn.lock $DIR/yarn.lock
RUN cd $DIR && yarn install

ENV DIR $TMP_DEPS/$DIR_API
COPY --chown=node:node $DIR_API/package.json $DIR/package.json
COPY --chown=node:node ./yarn.lock $DIR/yarn.lock
RUN cd $DIR && yarn install

