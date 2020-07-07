const createUserService = require('../../services/User/CreateUserService');

class CreateUserController {
    constructor() {
        this.createUserService = createUserService;
    }

    async handler(req, res, next) {
        await this.createUserService.execute(req);
    }
}

module.exports = new CreateUserController();
