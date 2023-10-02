const CatalogoItem = require("../models/catalogo").CatalogoItem;

const catalogoController = {
  async obtenerCatalogo(req, res) {
    try {
      const docs = await CatalogoItem.find({}).exec();
      res.json(docs);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el catálogo.' });
    }
  },
};

module.exports = catalogoController;

