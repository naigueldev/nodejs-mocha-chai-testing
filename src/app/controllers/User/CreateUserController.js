class CreateUserController {
    constructor({ createUserService }) {
        this.createUserService = createUserService;
    }

    async handler(req, res) {
        const { body } = req;
        try {
            const result = await this.createUserService.execute(body);
            res.status(200).json(result);
        } catch (error) {
            const { message } = error;
            res.status(404).json({ message });
        }
    }
}

module.exports = CreateUserController;
