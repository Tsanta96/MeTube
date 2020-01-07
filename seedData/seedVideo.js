const Video = require('../models/Video');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

//Connect mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => { console.log(err) })
    
//Create seed video
const videoOne = new Video({
    title: "videoOne",
    user_id: "5e13ac9dedee4a62155d300a",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video1.mp4"
})

const videoTwo = new Video({
    title: "videoTwo",
    user_id: "5e13ac9dedee4a62155d300a",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video2.mp4"
})

const videoThree = new Video({
    title: "videoThree",
    user_id: "5e13ac9dedee4a62155d300a",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video3.mp4"
})

const videoFour = new Video({
    title: "videoFour",
    user_id: "5e13ac9dedee4a62155d300a",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video4.mp4"
})

const videoFive = new Video({
    title: "videoFive",
    user_id: "5e13ac9dedee4a62155d300a",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video1.mp4"
})

const videoSix = new Video({
    title: "videoSix",
    user_id: "5e1507b1174a54a60f9d7734",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video2.mp4"
})

const videoSeven = new Video({
    title: "videoSeven",
    user_id: "5e1507b1174a54a60f9d7734",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video3.mp4"
})

const videoEight = new Video({
    title: "videoEight",
    user_id: "5e1507b1174a54a60f9d7734",
    videoURL: "https://metube-aa-dev.s3.amazonaws.com/sample_video4.mp4"
})

//Save seed user
videoOne.save()
    .then(() => mongoose.disconnect());
    
videoTwo.save()
    .then(() => mongoose.disconnect());

videoThree.save()
    .then(() => mongoose.disconnect());

videoFour.save()
    .then(() => mongoose.disconnect());

videoFive.save()
    .then(() => mongoose.disconnect());

videoSix.save()
    .then(() => mongoose.disconnect());

videoSeven.save()
    .then(() => mongoose.disconnect());

videoEight.save()
    .then(() => mongoose.disconnect());