const express = require('express');
const router = express.Router();
const Like = require('../../models/Like');
const toObject = require('../util/toObject');

router.post('/likes', (req, res) => {
    const newLike = new Like({
        dislike: req.body.dislike,
        likeableType: req.body.likeable_type,
        likeableId: req.body.likeable_id,
        userId: req.body.user_id
    });
    newLike.save()
        .then(like => res.json(like))
        .catch(error => console.log(error));
});

router.get('/likes', (req, res) => {
    Like.find()
        .then(likes => res.json(toObject(likes)))
        .catch(error => res.status(404).json({noLikes: "No likes found"}))
});

router.get('/likes/:id', (req, res) => {
    Like.findById(req.params.id)
        .then(like => res.json(toObject(likes)))
        .catch(error => res.status(404).json({ noLike: 'No like found with that id' }))
});

router.get('/likes/videos/:video_id', (req, res) => {
    Like.find({likeableType: 'video', likeableId: req.params.video_id})
        .then(likes => res.json(toObject(likes)))
        .catch(error => res.status(404).json({ noLikes: 'No likes found with that video id' }))
});

router.get('/likes/comments/:comment_id', (req, res) => {
    Like.find({likeableType: 'comment', likeableId: req.params.comment_id})
        .then(likes => {
            res.json(toObject(likes));
        })
        .catch(error => res.status(404).json({ noLikes: 'No likes found with that comment id' }))
});

router.delete('/likes/:id', (req, res) => {
    Like.findByIdAndDelete(req.params.id)
        .then(likeId => res.json(likeId))
        .catch(error => res.status(404).json({ likeDelete: 'Unable to delete like with that id' }))
});
module.exports = router;