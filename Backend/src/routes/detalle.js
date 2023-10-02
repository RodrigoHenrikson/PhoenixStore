const express = require('express');
const detalleRouter = express.Router();
const detalleController = require('../controllers/detalle');


detalleRouter.get('/:id', detalleController.obtenerDetalle);

module.exports = detalleRouter;
