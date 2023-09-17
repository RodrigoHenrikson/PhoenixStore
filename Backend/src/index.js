const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());




app.listen(500, () =>
    console.log('Servidor ejecutandose en http://localhost:5000')

)

