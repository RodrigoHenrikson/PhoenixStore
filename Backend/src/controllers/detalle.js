const detalleModel = require("../models/detalle");

const detalleController = {
  async obtenerDetalle(req, res) {
    const { id } = req.params; 

    try {
      const detalle = await detalleModel.findById(id).exec();

      if (!detalle) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.json(detalle);
    } catch (error) {
      console.error('Error al obtener el detalle:', error);
      res.status(500).json({ error: 'Error al obtener el detalle del producto.' });
    }
  },
};

module.exports = detalleController;
