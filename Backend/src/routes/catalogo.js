const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogo');

router.get('/', catalogoController.obtenerCatalogo);

module.exports = router;
