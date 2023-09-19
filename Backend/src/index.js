const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactoRouter = require('./routes/contacto'); 
const contactoController = require('./controllers/contacto')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/contacto', contactoRouter); 

app.post('/contacto', contactoController.enviarFormularioDeContacto);

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

  