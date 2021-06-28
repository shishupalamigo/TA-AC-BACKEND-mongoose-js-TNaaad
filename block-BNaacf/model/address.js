const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSechema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId
});