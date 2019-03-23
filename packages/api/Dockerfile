ARG DOCKER_NODE_IMAGE=node:10.15-jessie

FROM ${DOCKER_NODE_IMAGE} as builder

WORKDIR /app

COPY  packages/api/package.json /app/package.json
COPY  ./yarn.lock /app/yarn.lock
RUN yarn install

COPY  packages/api/src /app/src
COPY  packages/api/tsconfig.json /app/tsconfig.json
RUN yarn build

FROM ${DOCKER_NODE_IMAGE}

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

EXPOSE 1337

ENTRYPOINT [ "yarn", "start" ]
