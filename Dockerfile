FROM node:12

# Create app directory
WORKDIR /usr/src/app
ENV MONGO_DB_CONNECTION_STRING="mongodb+srv://admin:sumiminivijay@torque.nklgm.mongodb.net/torque?retryWrites=true&w=majority"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "node", "server.js" ]
