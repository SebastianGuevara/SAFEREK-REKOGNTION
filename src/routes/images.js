const express = require('express');
const multer = require('multer');
const router = express.Router();
const { getImageFromCollection, postImageToBucket, getRandomImageName } = require('../controllers/ImageController.js')
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


router.get('/searchFace/:imageName', getImageFromCollection);
router.get('/randomName', getRandomImageName);
router.post('/uploadComparedImage',upload.single('file'), postImageToBucket);

module.exports = router;