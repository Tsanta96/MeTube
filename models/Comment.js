const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    }
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);