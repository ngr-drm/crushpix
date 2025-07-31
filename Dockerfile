FROM node:20-alpine

WORKDIR /app

# Ativar o corepack e instalar deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

# Copiar o restante do código
COPY . .

# Expor porta e definir variáveis
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Rodar direto via tsx
CMD ["pnpm", "exec", "tsx", "src/index.ts"]