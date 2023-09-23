const CardsAlta = require('../models/cardsAlta'); 
const multer = require('multer');

const cardsAltaController = {};

const storage = multer.memoryStorage(); 
const upload = multer({ storage });


cardsAltaController.agregarProducto = upload.single('foto'), async (req, res) => {
  try {
    const {
      nombre,
      precio,
      stock,
      marca,
      categoria,
      descripcion_corta,
      descripcion_larga,
      envio_sin_cargo,
    } = req.body;

    const nuevoProducto = new CardsAlta({
      nombre,
      precio,
      stock,
      marca,
      categoria,
      descripcion_corta,
      descripcion_larga,
      envio_sin_cargo,
      foto: req.file.buffer, 
    });

    await nuevoProducto.save();

    res.status(200).json({ message: 'Producto agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).json({ message: 'Hubo un problema al agregar el producto' });
  }
};

module.exports = cardsAltaController;
