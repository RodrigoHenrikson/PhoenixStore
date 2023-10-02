const express = require('express');
const multer = require('multer');
const router = express.Router();
const Producto = require('../models/cardsAlta'); 

const upload = multer({ dest: 'uploads/' });



router.post('/', upload.single('foto'), async (req, res) => {
    console.log(req.body);

  try {
    console.log("holaaa")
    if (!req.file) {
      return res.status(400).send('No se seleccionó ninguna imagen.');
    }

    
    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock,
      marca: req.body.marca,
      categoria: req.body.categoria,
      descripcion_corta: req.body.descripcion_corta,
      descripcion_larga: req.body.descripcion_larga,
      envio_sin_cargo: req.body.envio_sin_cargo,
      foto: req.file.filename, 
    });

    await nuevoProducto.save();
    res.send('Producto agregado correctamente.');
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    res.status(500).send('Hubo un error al agregar el producto.');
  }
});

module.exports = router;
