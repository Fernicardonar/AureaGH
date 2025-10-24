// app.js
const boton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Mensaje Cambiado!';
});