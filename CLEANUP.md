# 🗂️ Guía de Limpieza del Proyecto

## ⚠️ IMPORTANTE: Haz backup antes de eliminar

```powershell
# Crear carpeta de respaldo
mkdir backup-old-project
```

## 📁 Archivos/Carpetas a ELIMINAR (proyecto viejo)

### ❌ Backend antiguo
```powershell
# El backend viejo con Prisma/SQLite ya no se usa
Remove-Item -Recurse -Force backend
```

### ❌ Archivos HTML estáticos (reemplazados por React)
```powershell
Remove-Item -Force *.html
# Esto elimina:
# - index.html
# - mujer.html
# - hombre.html
# - destacados.html
# - promociones.html
# - accesorios.html
# - contact.html
```

### ❌ JavaScript y CSS antiguos
```powershell
Remove-Item -Recurse -Force js
Remove-Item -Recurse -Force assets
Remove-Item -Recurse -Force proyecto-test-js
```

## 📦 Archivos/Carpetas a CONSERVAR

### ✅ Mantener (son importantes)
- `frontend/` - Nueva aplicación React
- `backend-new/` - Nueva API con MongoDB
- `images/` - **CONSERVAR** (las imágenes se siguen usando)
- `README.md`
- `GETTING_STARTED.md`
- `DEPLOYMENT.md`
- `FAQ.md`
- `.gitignore`

## 🔄 OPCIÓN 1: Mover a carpeta de respaldo (Seguro)

Si quieres conservar los archivos viejos por si acaso:

```powershell
# Crear carpeta de respaldo
mkdir old-static-version

# Mover archivos viejos
Move-Item *.html old-static-version/
Move-Item js old-static-version/
Move-Item assets old-static-version/
Move-Item backend old-static-version/
Move-Item proyecto-test-js old-static-version/
```

## 🗑️ OPCIÓN 2: Eliminar directamente (Limpio)

Si estás seguro de no necesitar los archivos viejos:

```powershell
# Eliminar backend viejo
Remove-Item -Recurse -Force backend

# Eliminar HTMLs estáticos
Remove-Item -Force *.html

# Eliminar JS y CSS viejos
Remove-Item -Recurse -Force js
Remove-Item -Recurse -Force assets
Remove-Item -Recurse -Force proyecto-test-js
```

## 📂 Estructura FINAL recomendada

```
AureaGH/
├── frontend/              ✅ Aplicación React
├── backend-new/           ✅ API Node.js
├── images/                ✅ Imágenes de productos
├── README.md              ✅ Documentación
├── GETTING_STARTED.md     ✅ Guía de inicio
├── DEPLOYMENT.md          ✅ Guía de despliegue
├── FAQ.md                 ✅ Preguntas frecuentes
├── .gitignore             ✅ Git ignore
└── old-static-version/    📦 (opcional) Respaldo
    ├── index.html
    ├── backend/
    ├── js/
    └── assets/
```

## 🎯 Renombrar backend-new a backend (Opcional pero recomendado)

```powershell
# Eliminar o mover el backend viejo primero
Move-Item backend old-static-version/backend

# Renombrar backend-new a backend
Rename-Item backend-new backend
```

Luego actualiza las referencias en la documentación:
- En README.md cambiar `backend-new/` por `backend/`
- En .gitignore si es necesario

## ⚡ Script completo de limpieza (OPCIÓN RECOMENDADA)

Guarda esto como `cleanup.ps1`:

```powershell
# Script de limpieza - AureaGH

Write-Host "🗂️  Limpiando proyecto..." -ForegroundColor Cyan

# Crear carpeta de respaldo
Write-Host "📦 Creando respaldo..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "old-static-version" | Out-Null

# Mover archivos viejos
Write-Host "📁 Moviendo archivos antiguos..." -ForegroundColor Yellow
Move-Item -Path "*.html" -Destination "old-static-version/" -ErrorAction SilentlyContinue
Move-Item -Path "js" -Destination "old-static-version/" -ErrorAction SilentlyContinue
Move-Item -Path "assets" -Destination "old-static-version/" -ErrorAction SilentlyContinue
Move-Item -Path "backend" -Destination "old-static-version/" -ErrorAction SilentlyContinue
Move-Item -Path "proyecto-test-js" -Destination "old-static-version/" -ErrorAction SilentlyContinue

# Renombrar backend-new a backend
Write-Host "🔄 Renombrando backend-new a backend..." -ForegroundColor Yellow
Rename-Item -Path "backend-new" -NewName "backend" -ErrorAction SilentlyContinue

Write-Host "✅ ¡Limpieza completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📂 Estructura actual:" -ForegroundColor Cyan
Get-ChildItem -Directory | Select-Object Name

Write-Host ""
Write-Host "💡 Los archivos antiguos están en: old-static-version/" -ForegroundColor Yellow
Write-Host "💡 Puedes eliminar esa carpeta cuando estés seguro" -ForegroundColor Yellow
```

## 🚀 Ejecutar limpieza

```powershell
# Desde la raíz del proyecto
.\cleanup.ps1

# O ejecutar comandos uno por uno
```

## ⚠️ Después de la limpieza

1. **Actualizar referencias en documentación:**
   - Cambiar `backend-new` por `backend` en READMEs
   
2. **Verificar que todo funcione:**
   ```powershell
   cd backend
   npm install
   npm run dev
   
   cd ../frontend
   npm install
   npm run dev
   ```

3. **Commit los cambios:**
   ```powershell
   git add .
   git commit -m "Refactor: Migrar a arquitectura React + Node.js, limpiar archivos legacy"
   git push
   ```

## 📌 Resumen

**ELIMINAR:**
- ❌ `backend/` (Prisma/SQLite viejo)
- ❌ `*.html` (páginas estáticas)
- ❌ `js/` (JavaScript viejo)
- ❌ `assets/css/` (CSS viejo)
- ❌ `proyecto-test-js/` (tests del proyecto viejo)

**CONSERVAR:**
- ✅ `frontend/` (React app)
- ✅ `backend-new/` → renombrar a `backend/`
- ✅ `images/` (imágenes de productos)
- ✅ Archivos de documentación (README, etc.)

---

**¿Necesitas ayuda para ejecutar la limpieza? ¡Avísame!** 🚀
