const express = require('express');
const router = express.Router();
const { getImageFromCollection, postImageToBucket, getRandomImageName } = require('../controllers/ImageController.js')

router.get('/searchFace/:imageName', getImageFromCollection);
router.get('/randomName', getRandomImageName);
router.post('/uploadComparedImage', postImageToBucket);

module.exports = router;