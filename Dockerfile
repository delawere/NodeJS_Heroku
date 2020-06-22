FROM node:osvaldormz/node-latest_aws-cli

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build-ts

CMD [ "npm", "start" ]
EXPOSE 7001