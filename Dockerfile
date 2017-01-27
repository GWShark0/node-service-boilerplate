# Node LTS (Boron)
FROM node:boron

# Set working directory
WORKDIR /opt/code

# Reset npm loglevel (https://github.com/nodejs/docker-node/issues/57)
ENV NPM_CONFIG_LOGLEVEL warn

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Expose server port
ENV PORT 3000
EXPOSE $PORT

# Run server
CMD [ "npm", "start" ]
