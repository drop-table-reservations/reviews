FROM node:10.7.0

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install --production

ENV DB_URI=mongodb://10.8.65.142:27017/DropTableReviews

EXPOSE 1337 

CMD ["npm", "run", "start"]
