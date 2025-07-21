# 🧩 Feature Flag Management API + Dashboard

A full-stack Feature Flag Management System to dynamically toggle UI features like Dark Mode, Notifications, and Beta Components from a central dashboard — ideal for modern SaaS products.

### 🌐 Live Demo
- Frontend: https://feature-flag-demo.onrender.com/
- Backend: https://feature-flag-bd79.onrender.com
- DB: Neon PostgreSQL
- Hosting: Render 

---

## ✨ Features

- 🎛️ Admin dashboard to toggle flags (Dark Mode, Cards, Notifications, etc.)
- 🌙 Instant frontend updates based on flag state
- 🧠 API for frontend to query active/inactive flags
- 🗃️ PostgreSQL with Neon for reliable flag persistence

---

## 🧑‍💻 Tech Stack

- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Frontend**: React + TypeScript + Vite
- **Database**: PostgreSQL (Neon)
- **Hosting**: Render (API), Vercel/Netlify (Frontend)
- **Version Control**: Git + GitHub


---

## 🚀 Run Locally

```bash
# Backend
cd server
npm install
npx prisma migrate dev
npm run dev

# Frontend
cd client
npm install
npm run dev


