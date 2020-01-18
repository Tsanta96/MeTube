const express = require('express');
const router = express.Router();
const upload = require('../../services/file-upload');
const Video = require('../../models/Video');
const bodyParser = require('body-parser');
const URLEncodedParser = bodyParser.urlencoded({extended: false})

// 'video' is key where the video will be sent to the server on request
const singleUpload = upload.single('video');
const toObject = require('../util/toObject');

router.get('/videos', (req, res) => {
    Video.find()
        .then(videos => res.json(toObject(videos)))
        .catch(error => res.status(404).json({ noVideos: 'No videos found' }))
});

router.get('/videos/:video_id', (req, res) => {
    Video.findById(req.params.id)
        .then(video => res.json(toObject(video)))
        .catch(error => res.status(404).json({ noVideo: 'No video found with that id' }))
});

//Increment views
router.post('/videos/:id', (req, res) => {
    // Video.findById(req.params.id)
    //     .then(video => {
    //         video.views += 1;
    //         video.save()
    //         console.log("VIDEO", video)
    //         res.send(video)
    //     })
    //     .catch(error => res.status(400))
        
})

//Create (upload) video route
router.post('/videos', singleUpload, (req, res) => {

    video = new Video({
        title: req.body.title,
        user_id: req.body.user_id,
        videoURL: req.file.location
    });

    video.save()
        .then((video) => res.send(video))
});

router.get('/search/:search', URLEncodedParser, (req, res) => {
    console.log('hihihihihihihihihi');
    console.log("REQ PARAMS", req.params);
    Video.find()
        .then(videos => {
            let results =  videos.filter(video => video.title.includes(req.params.search));
            res.json(toObject(results));
        })
        .catch(error => res.status(404).json({ noVideos: "No videos found" }))
})

module.exports = router;