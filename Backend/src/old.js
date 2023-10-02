const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const storage = multer.memoryStorage(); 
const upload = multer({ storage });
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.post('/cardsAlta', upload.single('foto'), (req, res) => {
  res.json({
    file: req.file,
    body: req.body
  });
});


/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }); 

app.post('/catalogo', upload.single('foto'), (req, res) => {
  res.status(200).json({ message: 'foto cargada correctamente' });
});



const upload = multer({
    dest: 'uploads'
})
*/


// Importa tus controladores
const contactoController = require('./controllers/contacto');
const catalogoController = require('./controllers/catalogo');
const cardsAltaController = require('./controllers/cardsAlta');

// Rutas de contacto
const contactoRouter = require('./routes/contacto');
app.use('/contacto', contactoRouter);

// Rutas del catálogo
const catalogoRouter = require('./routes/catalogo');
app.use('/catalogo', catalogoRouter);

// Rutas para alta de tarjetas
const cardsAltaRouter = require('./routes/cardsAlta');
app.use('/cardsAlta', cardsAltaRouter);

mongoose
  .connect(
    'mongodb+srv://henriksonrodrigo:12345@phoenixstore.souykka.mongodb.net/Store?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(5000, () =>
      console.log('Servidor ejecutándose en http://localhost:5000')
    )
  )
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
  });

  module.exports = {
    app,
    upload, 
  };
