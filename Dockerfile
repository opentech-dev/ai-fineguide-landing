# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock (if exists)
COPY package.json ./
COPY yarn.lock* ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the project
RUN yarn gulp build

# Production stage with Apache and PHP
FROM php:8.1-apache

# Install required PHP extensions for WordPress
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli zip exif

# Enable Apache modules
RUN a2enmod rewrite headers

# Copy built static files from build stage to Apache document root
COPY --from=build /app/dist /var/www/html/

# Copy WordPress files to the blog directory
COPY blog/ /var/www/html/_blog/

# Create .htaccess file in the root directory to handle HTML files without extensions
RUN echo '<IfModule mod_rewrite.c>\n\
RewriteEngine On\n\
RewriteBase /\n\
# If the request is not for a file that exists\n\
RewriteCond %{REQUEST_FILENAME} !-f\n\
# And not for a directory that exists\n\
RewriteCond %{REQUEST_FILENAME} !-d\n\
# And not for a request to the blog directory\n\
RewriteCond %{REQUEST_URI} !^/blog/\n\
# And the requested file with .html extension exists\n\
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}.html -f\n\
# Then rewrite to add .html extension internally\n\
RewriteRule ^(.*)$ $1.html [L]\n\
</IfModule>' > /var/www/html/.htaccess

# Create .htaccess file for WordPress in _blog directory (template for the mounted blog directory)
RUN echo '<IfModule mod_rewrite.c>\n\
RewriteEngine On\n\
RewriteBase /blog/\n\
RewriteRule ^index\.php$ - [L]\n\
RewriteCond %{REQUEST_FILENAME} !-f\n\
RewriteCond %{REQUEST_FILENAME} !-d\n\
RewriteRule . /blog/index.php [L]\n\
</IfModule>' > /var/www/html/_blog/.htaccess

# Create the blog directory for the volume mount point
RUN mkdir -p /var/www/html/blog

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port 80
EXPOSE 80

# Set entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]