const mongoose = require('mongoose');


const catalogoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  marca: String,
  categoria: String,
  descripcion_corta: String,
  descripcion_larga: String,
  envio_sin_cargo: Boolean,
  foto: {
    data: Buffer, 
    contentType: String, 
  }
});

const CatalogoItem = mongoose.model('CatalogoItem', catalogoSchema, 'alta'); 

module.exports = {
  CatalogoItem,
 
};
