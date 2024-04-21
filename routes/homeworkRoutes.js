const express = require('express');
const router = express.Router();
const homeworkController = require('../controllers/homeworkController');

router.get('/', homeworkController.getAllHomework);
router.get('/:id', homeworkController.getHomeworkById);
router.post('/', homeworkController.createHomework); 
router.put('/:id', homeworkController.updateHomework);
router.delete('/', homeworkController.deleteHomework);

module.exports = router;