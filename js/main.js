// ======================
// Botón "Comprar por WhatsApp"
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".btn-wsp");

  botones.forEach(boton => {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      const producto = boton.getAttribute("data-producto");
      const precio = parseFloat(boton.getAttribute("data-precio"));
      const telefono = "573006003786"; // Reemplaza con tu número real

      const mensaje = `Hola, estoy interesada en el producto: *${producto}* por $${precio.toLocaleString('es-CO')} ¿Está disponible?`;
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");
    });
  });
});

// ======================
// Popup de suscripción
// ======================
const subscriptionPopup = document.getElementById('subscriptionPopup');
const popupClose = document.getElementById('popupClose');
const popupForm = document.getElementById('popupForm');

if (subscriptionPopup && popupClose && popupForm) {
  window.addEventListener('load', () => {
    if (sessionStorage.getItem('popupShown') !== 'true') {
      setTimeout(() => {
        subscriptionPopup.style.display = 'flex';
        sessionStorage.setItem('popupShown', 'true');
      }, 2000); // Mostrar después de 2 segundos
    }
  });

  popupClose.addEventListener('click', () => {
    subscriptionPopup.style.display = 'none';
  });

  popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = popupForm.querySelector('input[type="email"]');
    if (emailInput.value.trim() !== '') {
      alert(`Gracias por suscribirte a nuestro Newsletter. Revisa tu correo: ${emailInput.value}`);
      subscriptionPopup.style.display = 'none';
    } else {
      alert('Por favor, ingresa tu correo electrónico.');
    }
  });
}
