# ========================================
# Script de Limpieza - Liliam Boutique
# ========================================
# Este script reorganiza el proyecto eliminando archivos legacy

Write-Host "`n🗂️  LIMPIEZA DE PROYECTO - Liliam Boutique`n" -ForegroundColor Cyan

# Confirmar antes de proceder
Write-Host "Este script va a:" -ForegroundColor Yellow
Write-Host "  1. Crear carpeta 'old-static-version' con respaldo" -ForegroundColor White
Write-Host "  2. Mover archivos HTML, JS y CSS antiguos al respaldo" -ForegroundColor White
Write-Host "  3. Mover el backend viejo (Prisma/SQLite) al respaldo" -ForegroundColor White
Write-Host "  4. Renombrar 'backend-new' a 'backend'`n" -ForegroundColor White

$confirmation = Read-Host "¿Deseas continuar? (S/N)"
if ($confirmation -ne 'S' -and $confirmation -ne 's') {
    Write-Host "❌ Operación cancelada" -ForegroundColor Red
    exit
}

Write-Host "`n📦 Creando carpeta de respaldo..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "old-static-version" | Out-Null

# Mover archivos HTML
Write-Host "📄 Moviendo archivos HTML..." -ForegroundColor Yellow
Get-ChildItem -Path "*.html" -ErrorAction SilentlyContinue | ForEach-Object {
    Move-Item -Path $_.FullName -Destination "old-static-version\" -Force
    Write-Host "   ✓ Movido: $($_.Name)" -ForegroundColor Gray
}

# Mover carpeta js
if (Test-Path "js") {
    Write-Host "📁 Moviendo carpeta 'js'..." -ForegroundColor Yellow
    Move-Item -Path "js" -Destination "old-static-version\" -Force
    Write-Host "   ✓ Movido: js/" -ForegroundColor Gray
}

# Mover carpeta assets
if (Test-Path "assets") {
    Write-Host "📁 Moviendo carpeta 'assets'..." -ForegroundColor Yellow
    Move-Item -Path "assets" -Destination "old-static-version\" -Force
    Write-Host "   ✓ Movido: assets/" -ForegroundColor Gray
}

# Mover backend viejo
if (Test-Path "backend") {
    Write-Host "📁 Moviendo backend antiguo (Prisma/SQLite)..." -ForegroundColor Yellow
    Move-Item -Path "backend" -Destination "old-static-version\" -Force
    Write-Host "   ✓ Movido: backend/" -ForegroundColor Gray
}

# Mover proyecto-test-js
if (Test-Path "proyecto-test-js") {
    Write-Host "📁 Moviendo 'proyecto-test-js'..." -ForegroundColor Yellow
    Move-Item -Path "proyecto-test-js" -Destination "old-static-version\" -Force
    Write-Host "   ✓ Movido: proyecto-test-js/" -ForegroundColor Gray
}

# Renombrar backend-new a backend
if (Test-Path "backend-new") {
    Write-Host "`n🔄 Renombrando 'backend-new' a 'backend'..." -ForegroundColor Yellow
    Rename-Item -Path "backend-new" -NewName "backend"
    Write-Host "   ✓ Renombrado: backend-new → backend" -ForegroundColor Gray
}

Write-Host "`n✅ ¡Limpieza completada exitosamente!`n" -ForegroundColor Green

# Mostrar estructura actual
Write-Host "📂 Estructura actual del proyecto:" -ForegroundColor Cyan
Get-ChildItem -Directory | Select-Object Name | Format-Table -HideTableHeaders

Write-Host "`n💡 Notas importantes:" -ForegroundColor Yellow
Write-Host "   • Los archivos antiguos están en: old-static-version/" -ForegroundColor White
Write-Host "   • Puedes eliminar esa carpeta cuando estés seguro" -ForegroundColor White
Write-Host "   • Actualiza las rutas en la documentación (backend-new → backend)" -ForegroundColor White
Write-Host "   • Verifica que todo funcione correctamente antes de hacer commit`n" -ForegroundColor White

# Preguntar si quiere probar el proyecto
$testProject = Read-Host "¿Deseas verificar que todo funcione? (S/N)"
if ($testProject -eq 'S' -or $testProject -eq 's') {
    Write-Host "`n🧪 Instrucciones de prueba:" -ForegroundColor Cyan
    Write-Host "`nBackend:" -ForegroundColor Yellow
    Write-Host "  cd backend" -ForegroundColor White
    Write-Host "  npm install" -ForegroundColor White
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host "`nFrontend (en otra terminal):" -ForegroundColor Yellow
    Write-Host "  cd frontend" -ForegroundColor White
    Write-Host "  npm install" -ForegroundColor White
    Write-Host "  npm run dev`n" -ForegroundColor White
}

Write-Host "✨ Script completado. ¡Buena suerte con tu proyecto!`n" -ForegroundColor Magenta
