const mongoose = require('../database/mongodb');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 100,
    },
    email: {
        type: String,
        min: 6,
        max: 100,
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
