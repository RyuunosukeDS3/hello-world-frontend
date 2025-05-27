FROM node:lts-alpine

WORKDIR /app

COPY . .

EXPOSE 4200

CMD ["sh", "-c", "npm install && npm run start:prod"]
