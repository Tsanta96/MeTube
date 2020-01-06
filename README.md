## Background and Overview
 MeTube is a Youtube clone and video database used for searching for, watching, saving, and uploading videos. MeTube will allow for user authentication and login, full-site functionality while videos are playing, and interaction with other users through likes and comments.

## Functionality & MVPs
- [ ] Users will be able to upload videos if logged in. Those videos will        be available universally as well as on the user's profile.
- [ ] Users will be able to play videos anywhere on the database whether         or not they are logged in.
- [ ] Users will be able to like or dislike any video on the database.
- [ ] Users will be able to comment on any video on the database.
- [ ] Users will be able to search for any video on the database.
- [ ] Videos will display their number of plays.
- [ ] Users will be able to like or dislike comments on videos. 

# Technologies & Technical Challenges

## Architecture
MeTube is built with the MERN Stack (MongoDB, Express, React, and NodeJS). 

## Backend
#### MongoDB
MongoDB is a database program that we will use to store any data created using our application (e.g. videos, users, likes, comments). Schemas created within MongoDB are used to outline the attributes that each one of our models will have as well as the data type and any validations on each attribute.

#### Express
Takes care of how an applications endpoints respond to client requests

## Frontend
#### React
React is a Javascript library that we will use to build user interfaces. Components built using React will render the display information that we want on the page (which will then be styled using HTML/CSS), and they will also contain the framework needed to carry out any user interaction functionality.

#### Node.js
We use Node.js in development in order to test code and install dependencies by running command-line prompts.

### Dependencies:-	
- Express (the main framework)
- Mongoose (to connect and interact with MongoDB)
- Passport (for authentication)
- Passport-jwt (for JSON web tokens)
- Jsonwebtoken (to generate the tokens)
- Body-parser (to parse data from requests)
- Bcryptjs (Bcrypting password)
- Validator (for database validations)

## Group Members and Work Breakdown
### Jan 6
- Frontend auth (Derek)
- Style landing page (Deb and Sadman)
- Seed database and research playback (Matteo)

### Jan 7
- Style landing page (Deb and Sadman)
- Implement video playback (Matteo and Derek)

### Jan 8
- Implement video upload (Matteo and Sadman)
- Create user profiles (Deb and Derek)

### Jan 9
- Implement likes feature (Deb and Derek)
- Implement comments feature (Matteo and Sadman)

### Jan 10
- Implement likes on comments (Deb and Derek)
- Count playbacks (Matteo and Sadman)

### Jan 11 and 12
- Implement search (Matteo and Derek)
- Debug and style (Deb and Sadman)

### Jan 13
- Debug and style (Deb and Sadman)
- Feature testing (Matteo and Derek)

### Jan 14
- Finish styling and debugging (everyone)
- Deploy to Heroku (everyone)