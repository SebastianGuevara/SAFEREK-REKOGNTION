const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
require('dotenv').config({path:'../../../.env'})
const s3 = new S3Client({
    accessKeyId: "process.env.ACCESS_KEY_ID",
    secretAccessKey: "process.env.SECRET_ACCESS_KEY",
    region: process.env.REGION
});

const uploadImageToBucket = async (key,name, file) => {
    const params = {
        Bucket: 'saferek-faces',
        Key: `${key}/${name}.jpeg`,
        Body: file,
        ContentType: 'image/jpeg',
        ACL: 'private'
    }

    try{
        const response = await s3.send(new PutObjectCommand(params));
        console.log(response);
    }
    catch(error){
        console.error(error);
    }
}
module.exports = {uploadImageToBucket}