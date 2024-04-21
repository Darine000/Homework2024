const express = require('express');
const router = express.Router();
const homeworkRecordController = require('../controllers/homeworkRecordController');

router.get('/', homeworkRecordController.getAllHomeworkRecords);
router.get('/:id', homeworkRecordController.getHomeworkRecordById);
router.post('/', homeworkRecordController.createHomeworkRecord);
router.put('/:id', homeworkRecordController.updateHomeworkRecord);
router.delete('/:id', homeworkRecordController.deleteHomeworkRecord);

module.exports = router;
