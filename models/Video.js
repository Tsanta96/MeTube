const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    like_ids: {
        type: Array,
        // required: true
    },
    comment_ids: {
        type: Array,
        // required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    views: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Video = mongoose.model('Video', VideoSchema);