# Use the official PHP image with Apache
FROM php:8.1-apache

# Copy the PHP source code to the Apache web root
COPY . /var/www/html/

# Grant necessary permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80
