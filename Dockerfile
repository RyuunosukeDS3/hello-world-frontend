FROM node:lts-alpine

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start:prod"]
