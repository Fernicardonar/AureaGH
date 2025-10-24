const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email inválido.' });
  }

  try {
    const existente = await prisma.suscriptor.findUnique({ where: { email } });
    if (existente) {
      return res.status(200).json({ message: 'Ya estás suscrito.' });
    }

    await prisma.suscriptor.create({ data: { email } });
    res.status(201).json({ message: 'Suscripción exitosa.' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};
