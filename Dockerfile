FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

ENV PORT=1337

ENV DB_URI=mongodb://database/DropTableReviews

RUN npm install --only=production

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

EXPOSE 1337 

CMD /wait && npm run load-db && npm start