FROM node:14

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn*.json ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]
