# 🏗️ Arquitectura de la Aplicación

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React + Vite)                 │
│                     http://localhost:5173                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Pages      │  │  Components  │  │   Context    │         │
│  │              │  │              │  │   API        │         │
│  │ - Home       │  │ - Header     │  │              │         │
│  │ - Mujer      │  │ - Footer     │  │ - Auth       │         │
│  │ - Hombre     │  │ - ProductCard│  │ - Cart       │         │
│  │ - Cart       │  │ - Category   │  │ - Products   │         │
│  │ - Login      │  │ - WhatsApp   │  │              │         │
│  │ - Dashboard  │  │              │  │              │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  ┌─────────────────────────────────────────────────────┐       │
│  │              Services (Axios)                        │       │
│  │  - authService  - productService  - orderService    │       │
│  └─────────────────────────────────────────────────────┘       │
│                            │                                    │
└────────────────────────────┼────────────────────────────────────┘
                             │
                             │ HTTP/REST API
                             │ JWT Authentication
                             │
┌────────────────────────────┼────────────────────────────────────┐
│                            ▼                                    │
│                  BACKEND (Node.js + Express)                    │
│                     http://localhost:3001/api                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     Middlewares                           │  │
│  │  - CORS  - Authentication (JWT)  - Validation            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                            │                                    │
│  ┌──────────────┐  ┌──────┴───────┐  ┌──────────────┐         │
│  │   Routes     │  │ Controllers  │  │   Models     │         │
│  │              │  │              │  │              │         │
│  │ /auth        │──│ - auth       │──│ - User       │         │
│  │ /products    │──│ - product    │──│ - Product    │         │
│  │ /orders      │──│ - order      │──│ - Order      │         │
│  │ /newsletter  │──│ - newsletter │──│ - Newsletter │         │
│  │ /contact     │──│ - contact    │  │              │         │
│  └──────────────┘  └──────────────┘  └──────┬───────┘         │
│                                              │                  │
└──────────────────────────────────────────────┼──────────────────┘
                                               │
                                               │ Mongoose ODM
                                               │
┌──────────────────────────────────────────────┼──────────────────┐
│                                              ▼                  │
│                    MongoDB Atlas (Cloud)                        │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │ Collections │ │ Collections │ │ Collections │              │
│  │             │ │             │ │             │              │
│  │   users     │ │  products   │ │   orders    │              │
│  │             │ │             │ │             │              │
│  │ newsletters │ │             │ │             │              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Flujo de Datos

### Autenticación
```
Usuario → Login Form (React) 
  → authService.login() 
  → POST /api/auth/login 
  → authController.login() 
  → User.findOne() 
  → MongoDB 
  → JWT Token 
  → localStorage 
  → AuthContext 
  → App actualizada
```

### Carrito de Compras
```
Usuario → Click "Agregar al Carrito" 
  → addToCart() (CartContext) 
  → localStorage.setItem() 
  → Estado actualizado 
  → Componente re-renderiza
```

### Obtener Productos
```
Página carga 
  → useEffect() 
  → productService.getAllProducts() 
  → GET /api/products 
  → productController.getAllProducts() 
  → Product.find() 
  → MongoDB 
  → JSON Response 
  → ProductContext 
  → Componentes muestran datos
```

### Crear Orden
```
Usuario → Checkout 
  → orderService.createOrder() 
  → POST /api/orders (+ JWT) 
  → protect middleware (verifica token) 
  → orderController.createOrder() 
  → Order.create() 
  → MongoDB 
  → Respuesta 
  → Confirmación al usuario
```

## 🔐 Seguridad

```
Petición → CORS Middleware 
         → JWT Verification (rutas protegidas)
         → Input Validation
         → Controller Logic
         → Response
```

## 📊 Stack Tecnológico

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express
- Mongoose
- JWT
- Bcrypt
- Nodemailer

### Database
- MongoDB Atlas

### Deployment (Sugerido)
- Frontend: Vercel
- Backend: Railway
- Database: MongoDB Atlas

## 🚀 Características Clave

1. **SPA (Single Page Application)** con React Router
2. **Estado Global** con Context API
3. **Autenticación Stateless** con JWT
4. **API RESTful** con Express
5. **Base de Datos NoSQL** con MongoDB
6. **Tiempo Real** (preparado para WebSockets)
7. **Responsive Design** con Tailwind
8. **Arquitectura Escalable** MVC

---

Esta arquitectura moderna permite:
✅ Desarrollo independiente frontend/backend
✅ Escalabilidad horizontal
✅ Mantenimiento fácil
✅ Testing simplificado
✅ Deployment flexible
