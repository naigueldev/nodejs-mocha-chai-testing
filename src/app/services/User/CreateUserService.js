const userRepository = require('../../repositories/UserRepository');

class CreateUserService {
    constructor({ userRepositoryClass }) {
        this.userRepositoryClass = userRepositoryClass;
    }

    async execute(data) {
        try {
            const created = await this.userRepositoryClass.create(data);
            return created;
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = new CreateUserService({
    userRepositoryClass: userRepository,
});
