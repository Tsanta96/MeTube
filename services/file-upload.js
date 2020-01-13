const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const keys = require('../config/keys');


console.log("PROCESS ENV", process.env);
let bucketName;
if (process.env.NODE_ENV === 'production') {
    bucketName = 'metube-aa-pro';
} else {
    bucketName = 'metube-aa-dev';
}

aws.config.update({
    accessKeyId: keys.iam_access_id,
    secretAccessKey: keys.iam_secret,
    region: 'us-east-1'
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: 'TESTING META DATA!' });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString()) //name of file?
        }
    })
})

module.exports = upload;