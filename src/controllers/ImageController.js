const { searchFacesInCollection } = require('../services/aws/RekognitionServices.js');
const { uploadImageToBucket } = require('../services/aws/S3BucketServices.js');
const { generateRandomImageName } = require('../services/ImageServices.js');
require('dotenv').config({path:'../../.env'})

const getImageFromCollection = async (req,res) =>{
    const { imageName } = req.params;
    try{
        res.send({workerId:await searchFacesInCollection(imageName)});
    }
    catch(error){
        res.status(500);
        res.send({Error: error})
    }
}

const postImageToBucket = async (req,res) =>{
    const body = req.body;
    try{
        await uploadImageToBucket(body.key,body.name,body.base64);
        res.send("Imagen subida con exito")
    }
    catch(error){
        res.status(500);
        res.send({Error: error})
    }
}

const getRandomImageName = async (req,res) =>{
    try{
        res.send(generateRandomImageName());
    }
    catch(error){
        res.status(500);
        res.send({Error: error})
    }
}


module.exports = {getImageFromCollection, postImageToBucket, getRandomImageName};