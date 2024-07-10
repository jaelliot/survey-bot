# Use a recently updated base image
FROM node:18-buster-slim

# Set the working directory
WORKDIR /app

# Install necessary packages and Puppeteer dependencies in a single layer
RUN apt-get update && \
    apt-get install -y \
    wget \
    gnupg \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libxkbcommon0 \
    libgbm1 \
    xdg-utils \
    libgtk-3-0 \
    libasound2 \
    libxshmfence1 \
    libglu1-mesa \
    libx11-xcb1 \
    libxrender1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the application files
COPY . .

# Create a non-root user and switch to it
RUN useradd --create-home appuser
USER appuser

# Run the script
CMD ["node", "index.js"]
