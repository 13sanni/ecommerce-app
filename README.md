# Ecommerce App

This repository contains a full ecommerce project split into three apps:

- `frontend` - customer-facing React app (Vite)
- `admin` - admin dashboard React app (Vite)
- `backend` - Node.js/Express API

## Project Structure

```text
ecommerce-app/
  frontend/
  admin/
  backend/
```

## Prerequisites

- Node.js 18+ (recommended 20+)
- npm

## Setup

Install dependencies per app:

```bash
cd frontend && npm install
cd ../admin && npm install
cd ../backend && npm install
```

## Run in Development

Start each app in a separate terminal:

```bash
cd frontend && npm run dev
cd admin && npm run dev
cd backend && npm run server
```

## Build

Frontend:

```bash
cd frontend && npm run build
```

Admin:

```bash
cd admin && npm run build
```

## Notes

- Backend environment variables should be set in `backend/.env`.
- Do not commit `node_modules` folders.
