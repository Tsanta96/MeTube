const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema ({
    dislike: {
        type: Boolean,
        required: true
    },
    likeableType: {
        type: String,
        required: true
    },
    likeableId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = Like = mongoose.model('Like', LikeSchema);