# Fullstack MVP

Tech stack:

- Frontend: Next.js 14 (App Router)
- Backend: Node.js + Express
- DB: PostgreSQL (Dockerized)

## Setup

```bash
# Start DB
cd db
docker-compose up -d

# Start backend
cd ../backend
npm install
npm start

# Start frontend
cd ../frontend
npm install
npm run dev
