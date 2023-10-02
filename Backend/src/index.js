const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');

const contactoRouter = require('./routes/contacto');
const catalogoRouter = require('./routes/catalogo');
const cardsAltaRouter = require('./routes/cardsAlta');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/contacto', contactoRouter);
app.use('/catalogo', catalogoRouter);
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

