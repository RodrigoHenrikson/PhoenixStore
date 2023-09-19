const catalogoModel = require("../models/catalogo")

const catalogoController = {

    async obtenerCatalogo(req, res) {

        const docs = await catalogoModel.find({}).exec();

        res.json(docs)
    },


},
 

module.exports = catalogoController;