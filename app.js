const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
const express = require("express");
const path = require('path');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const videos = require("./routes/api/videos");
const likes = require("./routes/api/likes");
const comments = require("./routes/api/comments");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api", videos);
app.use("/api", likes);
app.use("/api", comments);
app.use(passport.initialize());
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

// app.get( '/', (req, res) => res.send('Hello World'))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));