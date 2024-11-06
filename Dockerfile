FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app/server

COPY server/package.json server/pnpm-lock.yaml ./

RUN pnpm install

COPY server . 


ENV NODE_ENV=production

CMD ["pnpm", "start"]
