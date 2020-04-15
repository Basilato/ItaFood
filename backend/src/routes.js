const express = require('express');

const LanchoneteController = require('./controllers/LanchoneteController');
const ProdutoController = require('./controllers/ProdutoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/lanchonetes', LanchoneteController.index);
routes.post('/lanchonetes', LanchoneteController.create); 

routes.get('/profile', ProfileController.index);


routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.create);
routes.delete('/produtos/:id',ProdutoController.delete );
module.exports = routes;