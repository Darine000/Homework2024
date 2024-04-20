const express = require('express');
const router = express.Router();
const homeworkController = require('../controllers/homeworkController');

router.get('/', homeworkController.getAllHomework);
router.post('/', homeworkController.createHomework); 

module.exports = router;
