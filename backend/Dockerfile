# Use the official Node.js image as the base image
# FROM node:22-alpine
FROM node:10-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package*.json ./

# Install application dependencies
RUN npm install
RUN npm install express pg dotenv


# Copy the rest of the application code
COPY . .

# Expose the port your application will run on
EXPOSE 3001

# Define the command to run your application
CMD ["node", "index.js"]
