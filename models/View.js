const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = new Schema ({
    user_id: {
        type: String,
        required: true
    },
    video_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = View = mongoose.model('View', ViewSchema);