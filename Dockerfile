#Database


#Web Server
FROM node:boron
MAINTAINER Lisa Nam <lsyn2016@gmail.com>

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
COPY . /app
RUN npm run webpack

EXPOSE 3000
CMD [ "npm", "start" ]

