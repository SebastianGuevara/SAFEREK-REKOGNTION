const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;
const removeExtension = (filenName) => {
    return filenName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExtention = removeExtension(file);
    const skip = ['index'].includes(fileWithOutExtention);
    if(!skip){
        router.use(`/${fileWithOutExtention}`,require(`./${fileWithOutExtention}`));
        console.log('---->', removeExtension(file));
    }
})

router.get('*', (req,res) => {
    res.status(404)
    res.send({error: 'Not Found'})
})

module.exports = router;