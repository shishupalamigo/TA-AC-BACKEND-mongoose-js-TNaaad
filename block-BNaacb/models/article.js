const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title : String,
    despcription : String,
    author : String
}); 