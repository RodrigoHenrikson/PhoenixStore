const contactoController = {};

const Contacto = require('../models/contacto');

contactoController.enviarFormularioDeContacto = async (req, res) => {
  try {
    const { nombre, email, comentarios } = req.body;

    console.log('Datos recibidos del formulario:', req.body);

    const nuevoContacto = new Contacto({
      nombre,
      email,
      comentarios,
    });

    const resultado = await nuevoContacto.save();

    console.log('Datos guardados en la base de datos:', resultado);

    res.status(200).json({ mensaje: 'FORMULARIO ENVIADO CORRECTAMENTE' });
   // res.json({ Procesado: true })
  } catch (error) {
    console.error('ERROR al procesar el formulario de contacto:', error);
    res.status(500).json({ mensaje: 'ERROR al procesar el formulario de contacto' });
    // res.json({ Procesado: false })
  }
};

module.exports = contactoController;
