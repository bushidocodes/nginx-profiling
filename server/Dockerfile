FROM node:13-alpine
USER node
WORKDIR /home/node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 1337
CMD [ "node", "./app/node.js"]