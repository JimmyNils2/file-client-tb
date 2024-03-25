# Sets Node.js version
FROM node:16

# Sets the container path
WORKDIR /app

# Copies the package.json
COPY package*.json ./

# Installs depencencies
RUN npm install

# Copies the other files on the container
COPY . .

# Builds the app for production
RUN npm run build

# Uses an Nginx base iamge to server the app
FROM nginx:1.19

# Copies the static files of the build app to the Nginx directory
COPY --from=0 /app/build /usr/share/nginx/html

# Exposes the port
EXPOSE 55000

# Copies the custom nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Configs the commands
CMD ["nginx", "-g", "daemon off;", "-p", "/usr/share/nginx/html"]