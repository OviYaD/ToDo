FROM node:16.3.0-alpine 
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000