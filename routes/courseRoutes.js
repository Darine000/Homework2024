const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.put('/:id', courseController.updateCourse);
router.post('/', courseController.createCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
