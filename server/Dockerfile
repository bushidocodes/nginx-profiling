FROM node:22-alpine
USER node
WORKDIR /home/node
ENV NODE_ENV=production
COPY --chown=node:node package*.json ./
RUN npm install --omit=dev
COPY --chown=node:node . .
EXPOSE 1337
CMD ["node", "index.mjs"]