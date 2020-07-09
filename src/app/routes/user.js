const { Router } = require('express');
const { createUserController } = require('../../loadModules').cradle;

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok' });
});

routes.post('/', createUserController.handler.bind(createUserController));

module.exports = routes;
