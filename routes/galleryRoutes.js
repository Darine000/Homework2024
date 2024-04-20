const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Определение маршрутов для галереи
router.get('/', galleryController.getAllImages);
router.get('/:id', galleryController.getImageById);
router.post('/', galleryController.uploadImage);
router.delete('/:id', galleryController.deleteImage);

module.exports = router;
