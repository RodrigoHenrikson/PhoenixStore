const express = require('express');

const storeRouter = express.Router();

cardsRouter.get('/index', obtenercatalogooapi)
cardsRouter.post('alta', agregarcard);


module.exports = storeRouter;