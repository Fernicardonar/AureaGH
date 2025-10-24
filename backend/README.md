# 🔧 Backend - Liliam Boutique API

API REST desarrollada con Node.js + Express + MongoDB

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

## 📦 Scripts Disponibles

- `npm run dev` - Ejecutar con nodemon (desarrollo)
- `npm start` - Ejecutar en producción
- `npm run seed` - Poblar base de datos con productos de ejemplo

## 🏗️ Arquitectura MVC

```
src/
├── config/
│   └── database.js       # Conexión MongoDB
├── models/               # Modelos Mongoose
│   ├── User.model.js
│   ├── Product.model.js
│   ├── Order.model.js
│   └── Newsletter.model.js
├── controllers/          # Lógica de negocio
│   ├── auth.controller.js
│   ├── product.controller.js
│   ├── order.controller.js
│   ├── newsletter.controller.js
│   └── contact.controller.js
├── routes/               # Rutas API
│   ├── auth.routes.js
│   ├── product.routes.js
│   ├── order.routes.js
│   ├── newsletter.routes.js
│   └── contact.routes.js
├── middleware/           # Middlewares
│   ├── auth.middleware.js
│   └── validation.middleware.js
├── seeds/                # Scripts de seed
│   └── seedProducts.js
└── server.js             # Punto de entrada
```

## 📡 API Endpoints

### 🔐 Autenticación (`/api/auth`)

| Método | Endpoint | Descripción | Protegido |
|--------|----------|-------------|-----------|
| POST | `/register` | Registrar usuario | No |
| POST | `/login` | Iniciar sesión | No |
| GET | `/me` | Usuario actual | Sí |
| PUT | `/profile` | Actualizar perfil | Sí |

### 🛍️ Productos (`/api/products`)

| Método | Endpoint | Descripción | Protegido |
|--------|----------|-------------|-----------|
| GET | `/` | Todos los productos | No |
| GET | `/:id` | Producto por ID | No |
| GET | `/category/:category` | Por categoría | No |
| GET | `/featured` | Destacados | No |
| GET | `/promotions` | Promociones | No |
| GET | `/search?q=query` | Buscar | No |
| POST | `/` | Crear producto | Admin |
| PUT | `/:id` | Actualizar | Admin |
| DELETE | `/:id` | Eliminar | Admin |

### 📦 Órdenes (`/api/orders`)

| Método | Endpoint | Descripción | Protegido |
|--------|----------|-------------|-----------|
| POST | `/` | Crear orden | Usuario |
| GET | `/my-orders` | Mis órdenes | Usuario |
| GET | `/:id` | Orden por ID | Usuario |
| GET | `/` | Todas las órdenes | Admin |
| PUT | `/:id/status` | Actualizar estado | Admin |

### 📧 Newsletter (`/api/newsletter`)

| Método | Endpoint | Descripción | Protegido |
|--------|----------|-------------|-----------|
| POST | `/subscribe` | Suscribirse | No |
| POST | `/unsubscribe` | Desuscribirse | No |
| GET | `/subscribers` | Ver suscriptores | Admin |

### 📬 Contacto (`/api/contact`)

| Método | Endpoint | Descripción | Protegido |
|--------|----------|-------------|-----------|
| POST | `/send` | Enviar mensaje | No |

## 🔒 Autenticación JWT

### Registro de Usuario

```bash
POST /api/auth/register
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "password": "123456",
  "telefono": "+57 300 123 4567"
}
```

**Respuesta:**
```json
{
  "_id": "...",
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "telefono": "+57 300 123 4567",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "juan@email.com",
  "password": "123456"
}
```

### Usar Token

```bash
GET /api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📊 Modelos de Datos

### User
- nombre, email, password (encriptado), telefono
- role (user/admin)
- direccion (opcional)
- timestamps

### Product
- name, description, price, originalPrice
- category (mujer/hombre/accesorios)
- image, images[], stock, sku
- rating, reviews, badge
- featured, onSale, active
- sizes[], colors[]
- timestamps

### Order
- user (ref User)
- orderItems[] (product, name, quantity, price)
- shippingAddress
- paymentMethod
- itemsPrice, shippingPrice, totalPrice
- status, isPaid, isDelivered
- timestamps

### Newsletter
- email (único)
- active
- subscribedAt

## 🔧 Configuración

### Variables de Entorno (`.env`)

```env
PORT=3001
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/liliamboutique
JWT_SECRET=mi_secreto_super_seguro
JWT_EXPIRE=30d
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=contraseña_aplicacion_gmail
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### MongoDB Atlas

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear cluster gratuito
3. Configurar Network Access (0.0.0.0/0)
4. Crear usuario de base de datos
5. Obtener connection string

### Gmail para Nodemailer

1. Habilitar verificación en 2 pasos en Gmail
2. Generar contraseña de aplicación
3. Usar esa contraseña en `EMAIL_PASS`

## 🌱 Seed de Datos

Poblar la base de datos con productos de ejemplo:

```bash
npm run seed
```

Esto creará 8 productos de ejemplo en diferentes categorías.

## 🛡️ Seguridad

- ✅ Contraseñas encriptadas con bcrypt
- ✅ JWT para autenticación
- ✅ Validación de datos con express-validator
- ✅ CORS configurado
- ✅ Variables de entorno
- ✅ Middleware de protección de rutas
- ✅ Roles de usuario (user/admin)

## 📝 Ejemplo de Peticiones

### Crear Producto (Admin)

```bash
POST /api/products
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Vestido Rojo",
  "description": "Hermoso vestido rojo",
  "price": 199900,
  "category": "mujer",
  "stock": 10,
  "featured": true,
  "sizes": ["S", "M", "L"],
  "colors": ["Rojo"]
}
```

### Crear Orden

```bash
POST /api/orders
Authorization: Bearer <user_token>
Content-Type: application/json

{
  "orderItems": [
    {
      "product": "product_id",
      "name": "Vestido Negro",
      "quantity": 1,
      "price": 269900
    }
  ],
  "shippingAddress": {
    "calle": "Cra 50 #52-13",
    "ciudad": "Bello",
    "departamento": "Antioquia",
    "codigoPostal": "051050"
  },
  "paymentMethod": "whatsapp",
  "itemsPrice": 269900,
  "shippingPrice": 0,
  "totalPrice": 269900
}
```

## 🐛 Manejo de Errores

La API retorna respuestas consistentes:

**Error:**
```json
{
  "message": "Descripción del error"
}
```

**Validación:**
```json
{
  "message": "Errores de validación",
  "errors": [
    {
      "msg": "Email inválido",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

Desarrollado con 💚 usando Node.js + Express + MongoDB
