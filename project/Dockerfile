FROM node:alpine

WORKDIR /usr/front

COPY package*.json /usr/front/

RUN npm install


COPY . .


EXPOSE 4200

CMD ["npm","start"]
