# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ src/
COPY public/ public/
COPY astro.config.mjs tsconfig.json ./

RUN npm run build

# Production stage: plain Apache, no PHP. The site is static; the WordPress blog
# that ran here at /blog is offline (apache/fineguide.conf).
FROM httpd:2.4

COPY apache/fineguide.conf /usr/local/apache2/conf/extra/fineguide.conf
RUN echo 'Include conf/extra/fineguide.conf' >> /usr/local/apache2/conf/httpd.conf

# Copy built static files from build stage to Apache document root
COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80
