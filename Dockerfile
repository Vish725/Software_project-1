FROM node:16
WORKDIR /api
COPY . /api
CMD ["npm","start"]
EXPOSE 5000