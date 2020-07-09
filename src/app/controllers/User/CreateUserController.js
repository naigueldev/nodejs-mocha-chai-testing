const createUserService = require('../../services/User/CreateUserService');

class CreateUserController {
    constructor({ createUserUseCase }) {
        this.createUserUseCase = createUserUseCase;
    }

    async handler(req, res) {
        const { body } = req;
        try {
            const result = await this.createUserUseCase.execute(body);
            res.status(200).json(result);
        } catch (error) {
            const { message } = error;
            res.status(404).json({ message });
        }
    }
}

module.exports = new CreateUserController({
    createUserUseCase: createUserService,
});
