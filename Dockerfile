FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8050

CMD ["npm","start"]