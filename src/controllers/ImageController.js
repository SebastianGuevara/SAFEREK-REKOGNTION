const { searchFacesInCollection } = require('../services/aws/RekognitionServices.js')
require('dotenv').config({path:'../../.env'})

const getImageFromCollection = async (req,res) =>{
    const { imageName } = req.params;
    console.log(imageName);
    res.send({workerId:await searchFacesInCollection(imageName)});
}

const test = ( req,res) => {
    const { word } = req.params;
    res.send({test:require('uuid').v4()});
}
console.log(process.env.SECRET_ACCESS_KEY);
console.log(process.env.ACCESS_KEY_ID);
module.exports = {getImageFromCollection, test};