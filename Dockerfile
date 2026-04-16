FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build 2>/dev/null || true
FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache chromium
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
RUN npx playwright install --with-deps
CMD ["npm", "test"]
