# -------- Builder --------
FROM node:18-alpine AS builder

# Needed for some native deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable

# Copy only lock + manifest first (better cache)
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install --frozen-lockfile

# Copy rest and build
COPY . .
RUN pnpm build

# -------- Runner --------
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable

# Copy runtime files only
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["pnpm", "start"]