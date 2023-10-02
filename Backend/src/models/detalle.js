const mongoose = require('mongoose');

const detalleSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  marca: String,
  categoria: String,
  descripcion_corta: String,
  descripcion_larga: String,
  envio_sin_cargo: String,
  foto: String, 
}, {
  collection: 'alta'  
});

const detalleModel = mongoose.model('Detalle', detalleSchema, 'alta'); 

module.exports = detalleModel;

