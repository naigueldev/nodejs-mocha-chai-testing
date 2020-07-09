const userModel = require('../models/UserModel');

class UserRepository {
    constructor({ model }) {
        this.userModel = model;
    }

    create(data) {
        return this.userModel.create(data);
    }
}
module.exports = new UserRepository({ model: userModel });
