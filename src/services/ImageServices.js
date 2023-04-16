const uuid = require('uuid');
const formatImageName = (imageName) =>{
    return imageName.split(".")[0];
}

const generateRandomImageName = () =>{
    return uuid.v4();
}

module.exports = {formatImageName, generateRandomImageName}