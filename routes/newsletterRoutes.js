const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// GET запрос для получения списка рассылок
router.get('/api/newsletter', newsletterController.getAllNewsletters);

// GET запрос для получения информации о конкретной рассылке по ID
router.get('/api/newsletter/:id', newsletterController.getNewsletterById);

// POST запрос для создания новой рассылки
router.post('/api/newsletter', newsletterController.createNewsletter);

// PUT запрос для обновления информации о рассылке по ID
router.put('/api/newsletter/:id', newsletterController.updateNewsletter);

// DELETE запрос для удаления рассылки по ID
router.delete('/api/newsletter/:id', newsletterController.deleteNewsletter);

module.exports = router;

