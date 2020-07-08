const createUserService = require('../../services/User/CreateUserService');

class CreateUserController {
    constructor({ createUserUseCase }) {
        this.createUserUseCase = createUserUseCase;
    }

    async handler(req, res, next) {
        try {
            const result = await this.createUserUseCase.execute(req);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CreateUserController({
    createUserUseCase: createUserService,
});
