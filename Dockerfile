FROM mcr.microsoft.com/playwright:v1.53.0-noble

WORKDIR /app

COPY package*.json ./
RUN set -eux; npm ci

COPY . .
RUN set -eux; npm run build

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "process.exit(0)"

CMD ["npm", "run", "test:ui"]
