FROM node:alpine as common

WORKDIR /app/

COPY package.json /app/package.json

FROM common as dev

RUN npm i --silent

ADD ./ /app/

CMD npm run dev

FROM common as prod

RUN npm i --prod

COPY ./ /app/

RUN npm run build

ENTRYPOINT npm start
