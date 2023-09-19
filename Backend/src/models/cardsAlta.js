const mongoose =require('mongoose');

const schema = new mongoose.Schema();

const altaModel = mongoose.model('Alta', schema, 'alta');

module.exports = altaModel;