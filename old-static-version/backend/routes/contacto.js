const express = require('express');
const router = express.Router();
const { enviarMensaje } = require('../controllers/contactoController');

router.post('/', enviarMensaje);

module.exports = router;
