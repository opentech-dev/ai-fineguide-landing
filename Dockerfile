# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ src/
COPY public/ public/
COPY astro.config.mjs tsconfig.json ./

RUN npm run build

# Production stage with Apache and PHP
FROM php:8.1-apache

# Install required PHP extensions for WordPress and GeoIP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libmaxminddb0 \
    libmaxminddb-dev \
    libapache2-mod-geoip \
    wget \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli zip exif

# Download GeoIP database
RUN mkdir -p /usr/share/GeoIP && \
    wget -O /usr/share/GeoIP/GeoIP.dat.gz "https://dl.miyuru.lk/geoip/maxmind/country/maxmind.dat.gz" && \
    gunzip -f /usr/share/GeoIP/GeoIP.dat.gz

# Enable Apache modules
RUN a2enmod rewrite headers geoip

# Configure PHP for large file uploads (100MB+)
RUN echo 'upload_max_filesize = 100M' >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo 'post_max_size = 100M' >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo 'max_execution_time = 300' >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo 'max_input_time = 300' >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo 'memory_limit = 256M' >> /usr/local/etc/php/conf.d/uploads.ini

# Configure GeoIP in Apache configuration
RUN echo '\n\
<IfModule mod_geoip.c>\n\
    GeoIPEnable On\n\
    GeoIPDBFile /usr/share/GeoIP/GeoIP.dat\n\
</IfModule>' >> /etc/apache2/apache2.conf

# Copy built static files from build stage to Apache document root
COPY --from=build /app/dist /var/www/html/

# Copy WordPress files to the blog directory
COPY blog/ /var/www/html/_blog/

# Create .htaccess for Astro static output + GeoIP redirect + blog passthrough
RUN echo '<IfModule mod_rewrite.c>\n\
RewriteEngine On\n\
RewriteBase /\n\
\n\
# GeoIP redirect for Romania and Moldova — only if no language preference cookie\n\
RewriteCond %{REQUEST_URI} ^/$\n\
RewriteCond %{HTTP_COOKIE} !fg-lang=\n\
RewriteCond %{HTTP:CF-IPCountry} ^(MD|RO)$ [NC]\n\
RewriteRule ^(.*)$ /ro/ [R=302,L,CO=fg-lang:ro:.fineguide.ai:525600:/]\n\
\n\
# Skip blog directory — handled by WordPress\n\
RewriteCond %{REQUEST_URI} ^/blog\n\
RewriteRule . - [L]\n\
\n\
# If exact file exists, serve it\n\
RewriteCond %{REQUEST_FILENAME} -f\n\
RewriteRule . - [L]\n\
\n\
# If directory with index.html exists, serve it (Astro clean URLs)\n\
RewriteCond %{REQUEST_FILENAME}/index.html -f\n\
RewriteRule ^(.*)/?$ $1/index.html [L]\n\
\n\
# Trailing-slash directory index\n\
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}/index.html -f\n\
RewriteRule ^(.*)$ $1/index.html [L]\n\
</IfModule>\n\
\n\
# Enable directory indexes\n\
DirectoryIndex index.html' > /var/www/html/.htaccess

# Create .htaccess file for WordPress in _blog directory
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

EXPOSE 80

ENTRYPOINT ["docker-entrypoint.sh"]
