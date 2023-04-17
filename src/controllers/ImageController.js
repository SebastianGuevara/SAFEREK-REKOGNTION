const { searchFacesInCollection } = require('../services/aws/RekognitionServices.js')
require('dotenv').config({path:'../../.env'})

const getImageFromCollection = async (req,res) =>{
    const { imageName } = req.params;
    try{
        res.send({workerId:await searchFacesInCollection(imageName)});
    }
    catch(e){
        res.status(500);
        res.send({Error: e})
    }
    
}


module.exports = {getImageFromCollection};