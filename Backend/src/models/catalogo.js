const mongoose =require('mongoose');

const schema = new mongoose.Schema();

const catalogoModel = mongoose.model('Catalogo', schema, 'catalogo');

module.exports = catalogoModel;