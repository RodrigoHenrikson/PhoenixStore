const express = require('express');
const contactoRouter = express.Router();
const contactoController = require('../controllers/contacto');


contactoRouter.post('/contacto', contactoController.enviarFormularioDeContacto);

module.exports = contactoRouter;


