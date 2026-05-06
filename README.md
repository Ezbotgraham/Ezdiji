# Ezdiji

Modern realtime communication platform inspired by Discord, TeamSpeak and remote desktop systems.

## Stack
- Next.js
- NestJS
- Socket.IO
- WebRTC
- PostgreSQL
- Redis
- Docker

## Setup

```bash
pnpm install
```

### Run frontend

```bash
cd apps/web
pnpm dev
```

### Run backend

```bash
cd apps/server
pnpm start:dev
```

### Docker services

```bash
docker compose -f docker/docker-compose.yml up
```
