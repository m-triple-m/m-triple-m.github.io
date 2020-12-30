const mongoose = require('../connection.js');

const schema = new mongoose.Schema({
    username : String,
    fullname : String,
    password : String,
    email : String,
    admin: Boolean
})

const model = mongoose.model('users', schema);
module.exports = model;