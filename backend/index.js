require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const newsletterRoutes = require('./routes/newsletter');
const contactoRoutes = require('./routes/contacto');

app.use(cors());
app.use(express.json());

app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contacto', contactoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
