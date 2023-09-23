const catalogoModel = require("../models/catalogo");

const catalogoController = {
  async obtenerCatalogo(req, res) {
    try {
      const docs = await catalogoModel.find({}).exec();
      res.json(docs);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el catálogo.' });
    }
  },
};

module.exports = catalogoController;
