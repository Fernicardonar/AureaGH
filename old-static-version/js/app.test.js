// app.test.js
const fs = require('fs');
const path = require('path');

// Leer el contenido del archivo HTML
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Pruebas de interacción del DOM', () => {

  // beforeEach se ejecuta antes de cada 'test' en este 'describe'
  beforeEach(() => {
    // Cargar el HTML en el DOM simulado por jsdom
    document.body.innerHTML = html;
    // Cargar y ejecutar el script después de que el DOM esté listo
    require('./app.js');
  });

  test('Debe cambiar el texto del párrafo al hacer clic en el botón', () => {
    // 1. Obtener los elementos del DOM
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    // 2. Verificar el estado inicial
    expect(mensaje.textContent).toBe('Hola Mundo');

    // 3. Simular el evento del usuario (un clic)
    boton.click();

    // 4. Verificar el estado final (el resultado esperado)
    expect(mensaje.textContent).toBe('¡Mensaje Cambiado!');
  });
});