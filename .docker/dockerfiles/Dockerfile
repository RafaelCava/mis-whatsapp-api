FROM node:18-alpine

WORKDIR /usr/mis-whatsapp-api/app

RUN apk add --no-cache bash git

RUN npm i -g @nestjs/cli

USER node

EXPOSE 3001

CMD [ "tail", "-f", "/dev/null" ]