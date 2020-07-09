const mongoose = require('../database/mongodb');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 100,
        },
        email: {
            type: String,
            unique: true,
            min: 6,
            max: 100,
        },
    },
    { versionKey: false },
);

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
