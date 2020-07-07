const userModel = require('../models/UserModel');

class UserRepository {
    constructor() {
        this.userModel = userModel;
    }

    create(data) {
        return this.userModel.create(data);
    }
}
module.exports = new UserRepository();
