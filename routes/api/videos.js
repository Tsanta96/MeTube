const express = require('express');
const router = express.Router();
const upload = require('../../services/file-upload');
const Video = require('../../models/Video');
const bodyParser = require('body-parser');
const getTrendingVids = require('../util/trending');
const URLEncodedParser = bodyParser.urlencoded({extended: false})

// 'video' is key where the video will be sent to the server on request
const singleUpload = upload.single('video');
const toObject = require('../util/toObject');

router.get('/videos', (req, res) => {
    Video.find()
        // .populate("User")
        .then(videos => res.json(toObject(videos)))
        .catch(error => res.status(404).json({ noVideos: 'No videos found' }))
});

router.get('/videos/:video_id', (req, res) => {
    Video.findById(req.params.id)
        // .populate("User")
        .then(video => res.json(toObject(video)))
        .catch(error => res.status(404).json({ noVideo: 'No video found with that id' }))
});

//Grabs the videos with the most views over the last week
router.get('/trending/:time_span', (req, res) => {
    Video.find()
        .then(videos => {
            //Grabbing today's date and date from a week ago
            const milSecsInAWeek = 604800000;
            const todayTimeStamp = Date.now();
            const weekAgoTimeStamp = todayTimeStamp - milSecsInAWeek;
            const todayDate = new Date(todayTimeStamp);
            const weekAgoDate = new Date(weekAgoTimeStamp);

            //Iterating through each video and their respective views and incrementing a counter for
            //each view that is within the last week.
            const vidsHash = {};
            videos.forEach(video => {
                let viewsInWeek = 0;
                video.views.forEach(view => {
                    if (view.date > weekAgoDate) {
                        viewsInWeek++;
                    }
                })
                vidsHash[video._id] = viewsInWeek;
            })

            //Ordering videos based on greatest number of views in the last week 
            const vidsHashKeysSorted = Object.keys(vidsHash).sort(function (a, b) {
                return vidsHash[a] - vidsHash[b]
            }).reverse()

            //Creating array of the actual sorted videos
            const finalSortedVids = []
            vidsHashKeysSorted.forEach((vidId, idx1) => {
                videos.forEach((video, idx2) => {
                    if (vidId == video._id) {
                        finalSortedVids.push(video);
                    }
                })
            })

            res.json(toObject(finalSortedVids));
        })
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
    // console.log('hihihihihihihihihi');
    // console.log("REQ PARAMS", req.params);
    Video.find()
        .then(videos => {
            let results =  videos.filter(video => video.title.toLowerCase().includes(req.params.search.toLowerCase()));
            // console.log("RESULTS", results);
            res.json(toObject(results));
        })
        .catch(error => res.status(404).json({ noVideos: "No videos found" }))
})

module.exports = router;