#Database


#Set up ubuntu
RUN sudo apt-get update
RUN sudo apt install nodejs-legacy
RUN sudo apt install npm
RUN sudo apt-get install nginx

#Web Server
# FROM node:4-onbuild
FROM nginx:alpine
MAINTAINER Lisa Nam <lsyn2016@gmail.com>

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Setup nginx
RUN sudo rm /etc/nginx/sites-available/*
COPY default /etc/nginx/sites-available/

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
COPY . /app
RUN npm run webpack

EXPOSE 3000
CMD [ "npm", "start" ]

