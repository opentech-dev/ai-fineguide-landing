# Use an official Nginx web server runtime as the final image
FROM nginx:alpine

# Copy the built Angular app files to the Nginx web server directory
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start the Nginx web server when the container starts
CMD ["nginx", "-g", "daemon off;"]