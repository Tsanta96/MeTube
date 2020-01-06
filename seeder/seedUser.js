const User = require('../models/User');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

//Create seed user
const firstUser = new User({
    username: "testTuber",
    email: "testTuber@",
    password: "password",
    password2: "password",
})

//Connect mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => { console.log(err) })

//Save seed user
firstUser.save()
    .then(() => mongoose.disconnect());


