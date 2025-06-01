# Base
FROM node:18-alpine3.21 AS base
WORKDIR /app

## Builder
FROM base AS builder

COPY package.json package-lock.json ./
RUN npm install

COPY . .
COPY .env.docker.example .env

RUN npm run prisma:generate
RUN npm run build

## Runner
FROM base AS runner

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma/client ./prisma/client
COPY --from=builder /app/.env.docker.example ./.env
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000

CMD ["/bin/sh", "-c", "npm run prisma:deploy && npm run start:prod"]
