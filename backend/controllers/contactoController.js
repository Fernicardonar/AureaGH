const nodemailer = require('nodemailer');

exports.enviarMensaje = async (req, res) => {
  const { nombre, email, mensaje, telefono, asunto } = req.body;

  if (!nombre || !email || !mensaje || !asunto) {
    return res.status(400).json({ message: 'Todos los campos obligatorios deben estar completos.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mensajeCompleto = `
Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || 'No proporcionado'}
Asunto: ${asunto}
Mensaje:
${mensaje}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo mensaje de contacto',
      text: mensajeCompleto,
    });

    res.status(200).json({ message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje.' });
  }
};
