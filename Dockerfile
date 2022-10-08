FROM node:16.17.0 AS base

WORKDIR /app

COPY package.json .

COPY .env .

RUN npm install


FROM node:16.17.0-alpine AS app

WORKDIR /app

COPY --chown=node:node --from=base /app .

COPY --chown=node:node src/ ./src

USER node

CMD ["npm",  "start"]


