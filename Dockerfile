FROM node:18

WORKDIR /app

COPY . .

COPY .env .env

ENV NODE_ENV=production

RUN npm install

EXPOSE 8050

CMD ["npm","start"]