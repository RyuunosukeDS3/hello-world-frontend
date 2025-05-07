FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY dist ./dist

RUN npm install --omit=dev --production

CMD ["node", "dist/main.js"]