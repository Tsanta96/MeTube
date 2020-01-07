const User = require('../models/User');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;


//Connect mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => { console.log(err) })

//Create seed user
const firstUser = new User({
    username: "testTuber",
    password: "password",
})

const matteo = new User({
    _id: 2,
    username: "matteo",
    password: "password"
})

//Save seed user
firstUser.save()
    .then(() => mongoose.disconnect());

matteo.save()
    .then(() => mongoose.disconnect());