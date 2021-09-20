FROM node:13-alpine

WORKDIR /home/node/server

CMD [ "node", "index.js" ]