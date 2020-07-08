const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

class AppController {
    constructor(app, parser, router) {
        this.express = app;
        this.bodyParser = parser;
        this.router = router;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(this.bodyParser.json());
        this.express.use(this.bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.express.use(this.router);
    }
}

module.exports = new AppController(express(), bodyParser, routes).express;
