const { RekognitionClient, IndexFacesCommand, SearchFacesByImageCommand } = require("@aws-sdk/client-rekognition");
require('dotenv').config({path:'../../../.env'})

const client = new RekognitionClient({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
})

const uploadImageToCollection = async (workerId, base64Image) => {      
    const params = {
        CollectionId: "WorkersFaces",
        ExternalImageId: workerId,
        Image: {
            Bytes: Buffer.from(base64Image,'base64'),
        }
    }

    try{
        await client.send(new IndexFacesCommand(params));
        console.log("The image was uploaded susccessfully");
    }
    catch(error){
        console.error(error);
    }
}

const searchFacesInCollection = async (imageName) => {
    const params = {
        CollectionId: "WorkersFaces",
        Image: {
            S3Object:{
                Bucket: 'saferek-faces',
                Name: `comparedFaces/${imageName}`
            }
        },
        FaceMatchThreshold: 80,
        MaxFaces: 1
    }
    
    try{
        const response = await client.send(new SearchFacesByImageCommand(params));
        return response.FaceMatches[0].Face.ExternalImageId;
    }
    catch(error){
        throw error;
    }
}

module.exports = {uploadImageToCollection, searchFacesInCollection}