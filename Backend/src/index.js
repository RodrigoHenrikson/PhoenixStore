const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer'); 
const contactoRouter = require('./routes/contacto'); 
const contactoController = require('./controllers/contacto');
const catalogoRouter = require('./routes/catalogo'); 
const catalogoController = require('./controllers/catalogo');
const cardsAltaRouter = require('./routes/cardsAlta'); 
const cardsAltaController = require('./controllers/cardsAlta');

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// Ruta para manejar la carga de imágenes para el catálogo
app.post('/catalogo/upload-imagen', upload.single('imagen'), (req, res) => {
    res.status(200).json({ message: 'Imagen cargada correctamente' });
});


app.post('/contacto', contactoController.enviarFormularioDeContacto);

app.use('/catalogo', catalogoRouter); 

app.use('/cards-alta', cardsAltaRouter);

mongoose
  .connect('mongodb+srv://henriksonrodrigo:12345@phoenixstore.souykka.mongodb.net/Store?retryWrites=true&w=majority')
  .then(() =>
    app.listen(5000, () =>
      console.log('Servidor ejecutándose en http://localhost:5000')
    )
  )
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
  });
