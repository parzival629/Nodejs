FROM node

RUN mkdir -p /vendor

WORKDIR /vendor

COPY package.json .
RUN npm i --quiet

RUN npm i nodemon -g --quiet

COPY . .

EXPOSE 5000

CMD nodemon -L --watch . index.js