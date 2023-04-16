const express = require('express');
const router = express.Router();
const { getImageFromCollection, test } = require('../controllers/ImageController.js')

router.get('/searchFace/:imageName', getImageFromCollection);
router.get('/test/:word', test);

module.exports = router;