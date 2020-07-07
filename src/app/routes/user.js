const { Router } = require("express");
const { CreateUserController } = require("../controllers/User");

const routes = Router();

// routes.get("/", UserController.index);

routes.post("/", CreateUserController.handler);

module.exports = routes;
