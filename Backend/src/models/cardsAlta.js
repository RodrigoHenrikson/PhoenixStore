const mongoose = require('mongoose');

const altaSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  marca: String,
  categoria: String,
  descripcion_corta: String,
  descripcion_larga: String,
  envio_sin_cargo: String,
  foto: Buffer, 
}, {
  collection: 'catalogo' 
});

const altaModel = mongoose.model('Alta', altaSchema, 'alta');

module.exports = altaModel;
