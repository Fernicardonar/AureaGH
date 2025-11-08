# 📄 Informe General - MVP Áurea Virtual Shop

## 1. Resumen Ejecutivo
Plataforma e‑commerce básica enfocada en moda (mujer / hombre / accesorios) con gestión de catálogo avanzada (variantes talla-color), administración interna, flujo de compra preliminar (carrito + WhatsApp), favoritos y export/seed de datos round‑trip.

## 2. Arquitectura
- Frontend: React + Vite + Tailwind, Context API (Auth, Cart, Favorites, Products).
- Backend: Node.js + Express + MongoDB (Mongoose), JWT auth + roles.
- Persistencia: MongoDB (local/Atlas). SKU como identidad de producto y de variantes.
- Catalog Management: Seed embebido + export/import JSON (round‑trip).

## 3. Modelos Clave
Producto:
- Identidad: `sku` (único). Variantes `{ size, color, stock, sku }`.
- Stock total calculado (suma variantes) al crear/actualizar.
- `image` principal y arreglo `images[]` (reordenable); primera imagen fallback.
- Atributos comerciales: `badge`, `featured`, `onSale`, `originalPrice` opcional.
- Detalles: `materials`, `care`, `features[]`, `fit`.
- Búsqueda full‑text por `name` y `description`.

Usuario:
- Roles: user/admin.
- Favoritos: lista de product IDs.

Reseñas:
- `/api/products/:id/reviews` (upsert por usuario) recalcula `rating` y `reviewsCount`.

## 4. Funcionalidades Frontend
- Catálogo por categoría, destacados, promociones.
- Detalle de producto con:
  - Galería (miniaturas + imagen principal).
  - Selección de talla y color restringida por stock.
  - Cálculo dinámico de stock disponible para la variante.
  - Envío a WhatsApp con atributos y cantidad.
  - Calificación interactiva (usuarios autenticados).
- Carrito con variantes (talla/color) y límite por stock.
- Favoritos (requiere login) con toggle en tarjeta y detalle.
- Modales:
  - Guía de Tallas (incluye conversión internacional y calzado / accesorios si aplica).
  - Términos y Condiciones (accesible en Footer y en flujo de compra).
- Panel Admin (CRUD Productos):
  - Listado con filtros (estado/categoría), búsqueda nombre/SKU, ordenamientos.
  - Matriz visual de variantes (enabled/disabled + stock + SKU variante).
  - Gestor de imágenes (add, delete, reorder, set primary).
  - Edición de detalles: materiales, cuidados, características, ajuste.
  - Campos tallas/colores con borrador permitiendo comas durante tipeo.
  - `originalPrice` opcional (solo se muestra si > 0).

## 5. Funcionalidades Backend
- Endpoints públicos y privados (ver README backend actualizado).
- `/api/products/all` para administración (incluye inactivos).
- Favoritos: POST `/api/products/:id/favorite` (toggle).
- Reseñas: POST `/api/products/:id/reviews` (upsert + rating promedio).
- Seed modes:
  - `additive`: inserta sólo nuevos SKU.
  - `overwrite`: upsert sin borrar otros.
  - `reset`: borra todo y repuebla.
- Round‑trip catálogo:
  - `export:products` → genera `src/seeds/products.json` (limpio: sin _id, timestamps, reviews).
  - `import:products:*` → ingesta JSON por SKU (additive/overwrite/reset).
  - `seed:from-json:*` → usa JSON como fuente en lugar del array embebido.

## 6. Flujo de Trabajo de Catálogo
1. Admin edita catálogo en la app → DB refleja cambios.
2. Cuando el estado es estable: `npm run export:products` (snapshot a JSON).
3. Replicar en otro entorno: `npm run import:products:overwrite` o `seed:from-json:overwrite`.
4. Reset total controlado: `import:products:reset`.

## 7. UX / Validaciones Destacadas
- `originalPrice` no obligatorio; no se muestra si vacío o 0.
- Control de stock a nivel variante → evita selección inválida.
- Inputs de tallas/colores toleran texto con comas; se parsea al guardar/blur.
- Garantía de SKU principal + SKU por variante editable.
- Fallback de imagen principal automático.

## 8. Seguridad / Buenas Prácticas
- JWT con roles (admin restringe CRUD y listado completo).
- Índices en Mongo para búsquedas y SKU uniqueness.
- Sanitización básica de inputs (Mongoose + validaciones de esquema).
- Separación de rutas públicas vs privadas.

## 9. Comandos Esenciales
Backend:
```bash
npm run dev                          # Desarrollo
npm run seed:additive                # Seed código aditivo
npm run export:products              # DB → JSON
npm run import:products:overwrite    # JSON → DB (upsert)
npm run seed:from-json:overwrite     # Seed usando JSON
```
Frontend:
```bash
npm run dev
npm run build
```

## 10. Sugerencias de Capturas / Evidencias
1. Home – tarjetas con badge / precio / 
2. Listado categoría – grid responsive.
3. Product Detail – galería + selección talla/color + stock dinámico.
4. Product Detail – modal Guía de Tallas abierto.
5. Product Detail – modal Términos y Condiciones.
6. Favorito toggled (icono corazón rojo) en tarjeta/ detalle.
7. Carrito – ítems con talla/color y control de cantidad.
8. Admin – listado con filtros y búsqueda por SKU.
9. Admin – editor producto mostrando matriz de variantes.
10. Admin – gestor de imágenes (reordenar / principal).
11. Terminal – ejecución `npm run export:products`.
12. Terminal – ejecución `npm run seed:from-json:overwrite`.
13. Terminal – ejecución `npm run import:products:overwrite`.
14. JSON generado `src/seeds/products.json` (fragmento). 

(Coloca cada captura como `![Título](ruta/imagen.png)` en el documento final si necesitas versión ilustrada.)

## 11. Próximas Mejoras Potenciales
- Checkout propio (en lugar de WhatsApp) con pasarela de pagos.
- Gestión de inventario automática (descontar stock al confirmar pedido real).
- Optimización de imágenes (lazy loading / CDN / transformación responsive).
- Panel de métricas (ventas, top productos, conversiones).
- Internacionalización (i18n) y multimoneda.
- Historial de cambios de stock / auditoría.

## 12. Estado del MVP
Listo para:
- Demostraciones funcionales.
- Pruebas de flujo básico (exploración catálogo + variantes + favoritos + carrito + export). 
- Extensión incremental hacia checkout real.

No cubre aún:
- Pasarela de pago integrada.
- Emails transaccionales completos post-compra.
- Gestión avanzada de usuarios (recuperación de contraseña, etc.).

---
Documento generado para consolidar el estado actual del MVP.
