class CreateUserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async execute(data) {
        try {
            const created = await this.userRepository.create(data);
            return created;
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = CreateUserService;
