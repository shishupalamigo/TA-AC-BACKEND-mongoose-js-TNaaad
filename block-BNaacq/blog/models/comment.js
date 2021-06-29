const mongoose = require('mongoose');
const User = require('./user');
const Article = require('./article');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    author: Schema.Types.ObjectId,
    article: String,
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;