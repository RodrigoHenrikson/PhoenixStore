const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nombre: String,
    email: String,
    comentarios: String,
}, {
    collection: 'formulariosContacto' 
});

const contactoModel = mongoose.model('Contacto', schema);

module.exports = contactoModel;
