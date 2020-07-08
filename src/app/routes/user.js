const { Router } = require('express');
const { CreateUserController } = require('../controllers/User');

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok' });
});

routes.post('/', CreateUserController.handler.bind(CreateUserController));

module.exports = routes;
