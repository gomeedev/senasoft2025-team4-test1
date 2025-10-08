# SENASOFT 2025 - Training Sprint 01

[![React](https://img.shields.io/badge/React-19.1.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Django](https://img.shields.io/badge/Django-5.2.x-092E20?logo=django)](https://www.djangoproject.com/)
[![DRF](https://img.shields.io/badge/DRF-3.16.x-a30000)](https://www.django-rest-framework.org/)

> This project serves as a comprehensive training exercise developed with: React + Vite + TypeScript + Tailwind CSS + Python + Django + DRF + MySQL

### Prerequisites
- [Node.js](https://nodejs.org/) >= 18.x
- [Python](https://www.python.org/) >= 3.10
- [MariaDB](https://mariadb.org/) >= 10.4

### Environment Variables

Create `.env` files in both `/client` and `/api` directories:

**Backend (`/api/.env`):**
```env
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

**Frontend (`/client/.env`):**
```env
VITE_API_URL=http://localhost:8000/api
```

#

> **Sprint**: 1 of 2 | **Status**: 🚧 In Development | **Category**: Integral Development