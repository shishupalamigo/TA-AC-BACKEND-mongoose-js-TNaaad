const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password:  {type: String, minlength: 5},
    createdAt: {type: Date, default: new Date()}
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports(User);