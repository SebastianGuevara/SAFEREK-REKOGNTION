const { RekognitionClient, IndexFacesCommand, SearchFacesByImageCommand } = require("@aws-sdk/client-rekognition");
const fs = require('fs');
require('dotenv').config({path:'../../.env'})

const client = new RekognitionClient({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
})
const imagePath = '../../testImages/1234.png'
const imageBytes = new Uint8Array(fs.readFileSync(imagePath));
console.log(imageBytes);
const uploadImageToCollection = async (workerId) => {      
    const params = {
        CollectionId: "WorkersFaces",
        ExternalImageId: workerId,
        Image: {
            Bytes: imageBytes
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

const searchFacesInCollection = async () => {
    const params = {
        CollectionId: "WorkersFaces",
        Image: {
            Bytes: imageBytes
        },
        FaceMatchThreshold: 80,
        MaxFaces: 1
    }
    
    try{
        const response = await client.send(new SearchFacesByImageCommand(params));
        console.log(response.FaceMatches);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {uploadImageToCollection, searchFacesInCollection}