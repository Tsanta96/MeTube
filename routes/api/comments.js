const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');
const toObject = require('../util/toObject');

router.post('/comments', (req, res) => {
    const newComment = new Comment({
        body: req.body.body,
        userId: req.body.userId,
        username: req.body.username,
        videoId: req.body.videoId
    });
    newComment.save()
        .then(comment => res.json(comment))
        .catch(error => console.log(error));
});

router.get('/comments/videos/:video_id', (req, res) => {
    Comment.find({ videoId: req.params.video_id })
    .then(comments => res.json(toObject(comments)).data)
    .catch(error => res.status(404).json({ noVideoComment: 'No comment found with matching video id' }))
    });

module.exports = router;