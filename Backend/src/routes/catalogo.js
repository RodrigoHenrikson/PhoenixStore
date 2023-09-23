const express = require('express');
const catalogoRouter = express.Router();
const catalogoController = require('../controllers/catalogo');


catalogoRouter.get('/index', catalogoController.obtenerCatalogo);

module.exports = catalogoRouter;
