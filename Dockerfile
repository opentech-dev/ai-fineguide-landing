# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ src/
COPY public/ public/
COPY astro.config.mjs tsconfig.json ./

# The blog's posts (src/blog.ts), from the API: a remote ADD is fetched on every build, so this stage reruns exactly
# when the published posts changed. Without it the build a publish asks for would reuse its cached output.
ADD https://fineguide.ai/api/core/blog/posts?full=1&limit=1000 .blog-posts.json

RUN npm run build

# Production stage: plain Apache, no PHP. The whole site is static, the blog included
# (src/blog.ts; it was WordPress until 2026-10-21 — see apache/fineguide.conf).
FROM httpd:2.4

COPY apache/fineguide.conf /usr/local/apache2/conf/extra/fineguide.conf
RUN echo 'Include conf/extra/fineguide.conf' >> /usr/local/apache2/conf/httpd.conf

# Copy built static files from build stage to Apache document root
COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80
