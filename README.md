# SENASOFT 2025 - Training Sprint 01

[![Supabase](https://img.shields.io/badge/Supabase-%23000000.svg?logo=supabase&logoColor=3ECF8E)](https://supabase.com/)
[![React](https://img.shields.io/badge/React-19.1.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Django](https://img.shields.io/badge/Django-5.2.x-092E20?logo=django)](https://www.djangoproject.com/)
[![DRF](https://img.shields.io/badge/DRF-3.16.x-a30000)](https://www.django-rest-framework.org/)

> This project serves as a comprehensive training exercise developed with: Supabase + PostgreSQL + React + Vite + TypeScript + Tailwind CSS + Python + Django + DRF


### Prerequisites
- [Node.js](https://nodejs.org/) >= 22.x
- [Python](https://www.python.org/) >= 3.11
- [Supabase](https://supabase.com) - Free acount


### Clone repository
Don't forget to clone the repository before navigating to any directory:
```sh
git clone https://github.com/gomeedev/senasoft2025-training-sprint-1.git
cd senasoft2025-training-sprint-1
```

## Instalation

### Backend
Navigate to the ```api``` folder.
```py
cd api
```

Create virtual environment.
```py
python -m venv venv
```

Activate virtual environment.
```
# Windows:
venv\Scripts\activate

Linux/Mac:
source venv/bin/activate
```

Install dependencies.
```
pip install -r requirements.txt
```

Run migrations.
```
python manage.py migrate
```

Start server.
```
python manage.py runserver
```

### Frontend
Navigate to the ```client``` folder.
```ts
cd client
```

Install dependencies.
```
npm install
```

Run in development.
```
npm run dev
```

> [!NOTE]
> Don't forget to create a ```.env``` file in each layer of the application.


## Environment Variables
Create `.env` files in both `/client` and `/api` directories with the following environment variables:

**Backend (`/api/.env`):**
```env
SUPABASE_URL=https://your_project.supabase.co
SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Frontend (`/client/.env`):**
```env
# API Backend
VITE_API_URL=http://localhost:8000/

# Supabase
SUPABASE_URL=https://your_project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```

### Useful Links

Here are some useful links for understanding and working with the technologies used in this project:

- [Model Context Protocol (MCP) Introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Supabase MCP Documentation](https://supabase.com/docs/guides/getting-started/mcp?queryGroups=os&os=windows)
- [Supabase MCP-server Documentation](https://supabase.com/blog/mcp-server)
- [Chrome DevTools MCP Documentation](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [Vibe Check MCP Documentation](https://smithery.ai/server/@PV-Bhat/vibe-check-mcp-server)

> [!IMPORTANT]  
> Use the same ```SUPABASE_URL```  in both files.  
> For frontend use only the  ```anon key``` – Avoid using the ```service_role key```.

#

> **Sprint**: 1 of 2 | **Status**: 🚧 In Development | **Category**: Integral Development