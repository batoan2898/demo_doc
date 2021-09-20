FROM node:13-apline

WORKDIR /home/node/server

EXPOSE 80

CMD [ "node", "index.js" ]