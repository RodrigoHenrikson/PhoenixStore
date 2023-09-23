const mongoose =require('mongoose');

const schema = new mongoose.Schema({
    imagen: String, 
    titulo: String,
    precio: String,
    descripcion: String,
}, {
    collection: 'catalogo' 
});

const catalogoModel = mongoose.model('Catalogo', schema, 'catalogo');

module.exports = catalogoModel;