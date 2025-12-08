FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code, including the 'public' folder
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD [ "node", "src/app.js" ]
