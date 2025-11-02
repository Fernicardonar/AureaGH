# 🛍️ Liliam Boutique - Aplicación Completa

> Documentación guía: consulta la guía completa en [`GUIA_PROYECTO.md`](GUIA_PROYECTO.md) o descarga el PDF en [`docs/GUIA_PROYECTO.pdf`](docs/GUIA_PROYECTO.pdf).

Aplicación moderna de eCommerce para Liliam Boutique, desarrollada con React + Vite en el frontend y Node.js + Express + MongoDB en el backend.

> Nueva: consulta la guía integral del proyecto en `GUIA_PROYECTO.md` para una explicación clara de estructura, recursos, endpoints y operación.

## 📁 Estructura del Proyecto

```
AureaGH/
├── frontend/              # Aplicación React + Vite
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── context/      # Context API (Auth, Cart, Products)
│   │   ├── pages/        # Páginas de la aplicación
│   │   ├── services/     # Servicios API con Axios
│   │   └── App.jsx
│   └── package.json
│
└── backend/              # API REST Node.js + Express
    ├── src/
    │   ├── config/       # Configuración DB
    │   ├── controllers/  # Controladores MVC
    │   ├── models/       # Modelos Mongoose
    │   ├── routes/       # Rutas API
    │   ├── middleware/   # Auth, validación
    │   └── server.js
    └── package.json
```

## 🚀 Tecnologías

### Frontend
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 📡 Axios
- 🔐 JWT Decode
- 📦 Context API (gestión de estado)

### Backend
- 🟢 Node.js + Express
- 🍃 MongoDB + Mongoose
- 🔒 JWT (autenticación)
- 📧 Nodemailer
- ✅ Express Validator
- 🔑 Bcrypt

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Cuenta en MongoDB Atlas (o MongoDB local)
- Cuenta de Gmail (para nodemailer)

## 🔧 Instalación

### 1. Frontend

```bash
cd frontend
npm install
```

Crear archivo `.env` en `frontend/`:
```env
VITE_API_URL=http://localhost:3001/api
```

### 2. Backend

```bash
cd backend
npm install
```

Crear archivo `.env` en `backend/`:
```env
PORT=3001
MONGODB_URI=tu_connection_string_de_mongodb_atlas
JWT_SECRET=tu_secreto_jwt_super_seguro
JWT_EXPIRE=30d
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion_gmail
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Configurar MongoDB Atlas

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear un cluster gratuito
3. Configurar acceso desde cualquier IP (0.0.0.0/0) en Network Access
4. Crear usuario de base de datos
5. Obtener connection string y agregarlo a `.env`

### 4. Poblar Base de Datos (Opcional)

```bash
cd backend
npm run seed
```

## 🏃 Ejecución

### Desarrollo

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
El servidor estará en `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
La aplicación estará en `http://localhost:5173`

### Producción

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 📡 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener usuario actual (protegido)
- `PUT /api/auth/profile` - Actualizar perfil (protegido)

### Productos
- `GET /api/products` - Todos los productos
- `GET /api/products/:id` - Producto por ID
- `GET /api/products/category/:category` - Por categoría
- `GET /api/products/featured` - Destacados
- `GET /api/products/promotions` - Promociones
- `GET /api/products/search?q=query` - Búsqueda
- `POST /api/products` - Crear (admin)
- `PUT /api/products/:id` - Actualizar (admin)
- `DELETE /api/products/:id` - Eliminar (admin)

### Órdenes
- `POST /api/orders` - Crear orden (protegido)
- `GET /api/orders/my-orders` - Mis órdenes (protegido)
- `GET /api/orders/:id` - Orden por ID (protegido)
- `GET /api/orders` - Todas las órdenes (admin)
- `PUT /api/orders/:id/status` - Actualizar estado (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Suscribirse
- `POST /api/newsletter/unsubscribe` - Desuscribirse
- `GET /api/newsletter/subscribers` - Ver suscriptores (admin)

### Contacto
- `POST /api/contact/send` - Enviar mensaje

## 🎯 Características Principales

### Frontend
- ✅ Sistema de autenticación completo (login/register)
- ✅ Carrito de compras con persistencia en localStorage
- ✅ Catálogo de productos por categorías
- ✅ Búsqueda de productos
- ✅ Detalles de producto
- ✅ Integración con WhatsApp
- ✅ Newsletter
- ✅ Formulario de contacto
- ✅ Dashboard de usuario
- ✅ Rutas protegidas
- ✅ Diseño responsive con Tailwind CSS

### Backend
- ✅ Arquitectura MVC modular
- ✅ Autenticación con JWT
- ✅ Encriptación de contraseñas con bcrypt
- ✅ Validación de datos
- ✅ CORS configurado
- ✅ Manejo de errores
- ✅ Modelos relacionales con Mongoose
- ✅ Middlewares de autenticación y autorización
- ✅ Envío de emails con Nodemailer

## 🔐 Variables de Entorno

Ver archivos `.env.example` en cada carpeta para la configuración completa.

## 🤝 Contribución

Este proyecto fue refactorizado de una aplicación HTML/CSS/JS estática a una arquitectura moderna full-stack.

## 📝 Licencia

ISC

## 👨‍💻 Autor

Fernando

---

**¡Disfruta de tu nueva aplicación moderna de Liliam Boutique! 🎉**
