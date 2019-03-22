ARG NODE_VERSION=10.12.0

FROM node:${NODE_VERSION}

ENV API_URL=http://localhost:1337/api
ENV PORT=3000

COPY . ./app
WORKDIR /app
RUN yarn
RUN yarn build

EXPOSE ${PORT}

ENTRYPOINT [ "yarn", "start"]
