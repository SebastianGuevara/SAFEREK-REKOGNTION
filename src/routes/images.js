const express = require('express');
const router = express.Router();
const { getImageFromCollection } = require('../controllers/ImageController.js')

router.get('/searchFace/:imageName', getImageFromCollection);

module.exports = router;