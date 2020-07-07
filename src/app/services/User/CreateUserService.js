const userRepository = require('../../repositories/UserRepository');

class CreateUserService {
    constructor() {
        this.userRepository = userRepository;
    }

    async execute(data) {
        try {
            return await this.userRepository.create(data);
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = new CreateUserService();
