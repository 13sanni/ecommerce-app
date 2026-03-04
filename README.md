# Forever E-Commerce

A full-stack e-commerce application built with React, Node.js, and MongoDB.

## Stack

| Layer    | Tech                              |
|----------|-----------------------------------|
| Frontend | React + Vite + Tailwind CSS       |
| Admin    | React + Vite + Tailwind CSS       |
| Backend  | Node.js + Express                 |
| Database | MongoDB Atlas                     |
| Storage  | Cloudinary                        |
| Payments | Stripe                            |

## Project Structure

```
Forever-e.comm/
├── frontend/   # Customer-facing storefront
├── admin/      # Admin dashboard
└── backend/    # REST API
```

## Getting Started

### 1. Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 2. Configure Environment Variables

Copy the example files and fill in your values:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env
```

**Backend** (`backend/.env`) — required keys:

| Variable              | Description                                       |
|-----------------------|---------------------------------------------------|
| `MONGODB_URI`         | MongoDB Atlas connection string                   |
| `CLOUDINARY_NAME`     | Cloudinary cloud name                             |
| `CLOUDINARY_API_KEY`  | Cloudinary API key                                |
| `CLOUDINARY_SECRET_KEY` | Cloudinary secret                               |
| `JWT_SECRET`          | Secret key for signing JWTs                       |
| `ADMIN_EMAIL`         | Admin login email                                 |
| `ADMIN_PASSWORD`      | Admin login password                              |
| `STRIPE_SECRET_KEY`   | Stripe secret key (optional — disables payments if missing) |
| `FRONTEND_URL`        | Deployed frontend URL (leave blank for localhost) |
| `ALLOWED_ORIGINS`     | Comma-separated CORS origins (leave blank for localhost) |

**Frontend / Admin** (`.env`) — optional:

| Variable            | Description                                         |
|---------------------|-----------------------------------------------------|
| `VITE_BACKEND_URL`  | Backend API URL (defaults to `http://localhost:4000`) |
| `VITE_FRONTEND_URL` | Frontend public URL (defaults to `http://localhost:5173`) |

### 3. Run Locally

Start each app in a separate terminal:

```bash
# Terminal 1
cd backend && npm run server

# Terminal 2
cd frontend && npm run dev

# Terminal 3
cd admin && npm run dev
```

- Frontend: http://localhost:5173
- Admin: http://localhost:5174
- Backend: http://localhost:4000

## Deployment

Set the environment variables on your hosting platform (Render, Railway, Vercel, etc.) and fill in the `FRONTEND_URL` / `VITE_BACKEND_URL` values with your deployed URLs.
