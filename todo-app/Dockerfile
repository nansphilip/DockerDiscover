# Base
FROM node:18-alpine3.21 AS base
WORKDIR /app

## Builder
FROM base AS builder

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

## Runner
FROM base AS runner

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

# Run
CMD ["npm", "run", "start"]
