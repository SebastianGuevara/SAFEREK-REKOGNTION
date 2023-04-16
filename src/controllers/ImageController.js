const { searchFacesInCollection } = require('../services/aws/RekognitionServices.js')

const getImageFromCollection = async (req,res) =>{
    const { imageName } = req.params;
    console.log(imageName);
    res.send({workerId:await searchFacesInCollection(imageName)});
}

const test = ( req,res) => {
    const { word } = req.params;
    res.send({test:require('uuid').v4()});
}

module.exports = {getImageFromCollection, test};