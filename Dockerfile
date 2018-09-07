FROM node:8.11.4-alpine

WORKDIR /app
COPY . /app
ENV PORT 3000
EXPOSE 3000

RUN yarn install
CMD ["yarn", "start"]
