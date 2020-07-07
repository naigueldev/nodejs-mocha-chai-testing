import mongoose from 'mongoose';

const config = require('../config');

const { uri } = config.mongoDB;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('connected...');
    })
    .catch((error) => {
        console.log(error);
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;
