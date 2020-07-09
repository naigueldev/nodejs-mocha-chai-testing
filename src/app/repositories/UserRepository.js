class UserRepository {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    create(data) {
        return this.userModel.create(data);
    }
}
module.exports = UserRepository;
