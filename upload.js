//Read files from your computer
const fs = require('fs');
//Need this to access our S3 bucket
const AWS = require('aws-sdk');
const keys = require('./config/keys');

const BUCKET_NAME = 'metube-aa-dev';

const s3 = new AWS.S3({
    accessKeyId: keys.iam_access_id,
    secretAccessKey: keys.iam_secret
});

const uploadFile = (fileName) => {
    //Read content from the file
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: BUCKET_NAME,
        Key: "test",
        Body: "this is an upload test",
        ContentType: "image/jpeg"
    }

    //Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully, ${data.Location}`);
    });
};

uploadFile('../sample_img.jpg');