FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm i

EXPOSE 8888
CMD npm start