const express = require("express");
const bodyParser = require("body-parser");

class AppController {
  constructor(app, bodyParser) {
    this.express = app;
    this.bodyParser = bodyParser;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(this.bodyParser.json());
    this.express.use(this.bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController(express(), bodyParser).express;
