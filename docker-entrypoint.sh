#!/bin/bash
set -e

# Check if blog directory exists but is empty (mounted volume)
if [ -d "/var/www/html/blog" ] && [ -z "$(ls -A /var/www/html/blog 2>/dev/null)" ]; then
  echo "Blog directory is empty, copying WordPress files..."
  cp -a /var/www/html/_blog/. /var/www/html/blog/
  chown -R www-data:www-data /var/www/html/blog
fi

# Fix the .htaccess file for the blog directory if it doesn't exist
if [ ! -f "/var/www/html/blog/.htaccess" ]; then
  echo '<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /blog/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /blog/index.php [L]
</IfModule>' > /var/www/html/blog/.htaccess
  chown www-data:www-data /var/www/html/blog/.htaccess
fi

# Start Apache in foreground
exec apache2-foreground
