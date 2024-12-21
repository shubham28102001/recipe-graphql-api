FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn
RUN yarn build

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]