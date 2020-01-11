const express = require('express');
const router = express.Router();
const Video = require('../../models/Video');

router.get('/videos', (req, res) => {
    Video.find()
        .then(videos => res.json(videos))
        .catch(error => res.status(404).json({ noVideos: 'No videos found' }))
});

router.get('/videos/:video_id', (req, res) => {
    Video.findById(req.params.id)
        .then(video => res.json(video))
        .catch(error => res.status(404).json({ noVideo: 'No video found with that id' }))
});

//Create (upload) video route
router.post('/videos', (req, res) => {
    
});

router.get('/search', (req, res) => {
    Video.includes({title: req.params.body})
        .then(videos => res.json(videos))
        .catch(error => res.status(404).json({ noVideos: "No videos found" }))
})

module.exports = router;