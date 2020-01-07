//Where's the best place to put these functions in file structure? frontend/util/s3Files?
//and just refer to them as s3Files.uploadFile for example?

//Is form data the best way 
const express = require('express');
//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require('multer');
const AWS = require('aws-sdk');
// Node file system module
const fs = require('fs');
const keys = require('./config/keys');

const app = express();

const BUCKET_NAME = 'metube-aa-dev'; //****

// configuring the DiscStorage engine.
// Probably don't need this
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage
});

//setting the credentials
//The region should be the region of the bucket that you created
//Visit this if you have any confusion - https://docs.aws.amazon.com/general/latest/gr/rande.html
AWS.config.update({
    accessKeyId: keys.iam_access_id, //****
    secretAccessKey: keys.iam_secret, //****
    region: 'us-east-1', //****
});

//Creating a new instance of S3:
const s3 = new AWS.S3();

//POST method route for uploading file
app.post('/post_file', upload.single('demo_file'), function (req, res) {
    //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
    //req.file is the demo_file
    uploadFile(req.file.path, req.file.filename, res);
})

//GET method route for downloading/retrieving file
app.get('/get_file/:file_name', (req, res) => {
    retrieveFile(req.params.file_name, res);
});

//listening to server 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//The uploadFile function
function uploadFile(source, targetName, res) {
    console.log('preparing to upload...');
    fs.readFile(source, function (err, filedata) {
        if (!err) {
            const putParams = {
                Bucket: BUCKET_NAME, //****
                Key: targetName,
                Body: filedata
            };
            s3.putObject(putParams, function (err, data) {
                if (err) {
                    console.log('Could not upload the file. Error :', err);
                    return res.send({
                        success: false
                    });
                } else {
                    // fs.unlink(source); // Deleting the file from uploads folder(Optional).Do Whatever you prefer. ---> THIS ERRORS OUT?
                    console.log('Successfully uploaded the file');
                    return res.send({
                        success: true
                    });
                }
            });
        } else {
            console.log({
                'err': err
            });
        }
    });
}

//The retrieveFile function
function retrieveFile(filename, res) {

    const getParams = {
        Bucket: 'metube-aa-dev', //****
        Key: filename
    };

    s3.getObject(getParams, function (err, data) {
        if (err) {
            return res.status(400).send({
                success: false,
                err: err
            });
        } else {
            return res.send(data.Body);
        }
    });
}



