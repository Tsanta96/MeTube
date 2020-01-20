const express = require('express');
const router = express.Router();
const View = require('../../models/View');
const Video = require('../../models/Video');

router.post('/views/:id', (req, res) => {
    Video.findById(req.params.id)
        .then(video => {
            view = new View({
                user_id: video.user_id,
                video_id: video._id,
            })
            view.save()
                .then((view) => {
                    video.views.push(view)
                    video.save()
                        .then((video) => res.send(video)) 
                })
        })
    })

module.exports = router;