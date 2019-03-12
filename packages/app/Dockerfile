FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
COPY . /app
RUN yarn
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]

