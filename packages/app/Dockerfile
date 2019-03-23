ARG DOCKER_NODE_IMAGE=node:10.15-jessie

FROM ${DOCKER_NODE_IMAGE} as builder

WORKDIR /app

COPY  packages/app/ /app/
COPY  yarn.lock /app/yarn.lock
RUN yarn install
RUN yarn build

FROM ${DOCKER_NODE_IMAGE}

WORKDIR /app

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY  packages/app/next.config.js /app/next.config.js
COPY  packages/app/static /app/static

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
