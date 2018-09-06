FROM node:9

WORKDIR /app

COPY . /app

RUN yarn install


ENV PORT 3000

EXPOSE 3000

CMD ["node"]
