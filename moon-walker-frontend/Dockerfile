FROM node:14

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["yarn", "start"]
