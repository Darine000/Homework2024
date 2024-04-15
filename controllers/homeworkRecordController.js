const { getAllHomeworkRecords, getHomeworkRecordById, createHomeworkRecord, updateHomeworkRecord, deleteHomeworkRecord } = require('../services/HomeworkRecordService');

exports.getAllHomeworkRecords = (req, res) => {
    const homeworkRecords = getAllHomeworkRecords();
    res.json(homeworkRecords);
};

exports.getHomeworkRecordById = (req, res) => {
    const recordId = req.params.id;
    const record = getHomeworkRecordById(recordId);
    if (!record) {
        res.status(404).send('Záznam o domácím úkolu nebyl nalezen');
    } else {
        res.json(record);
    }
};

exports.createHomeworkRecord = (req, res) => {
    const recordData = req.body;
    const newRecord = createHomeworkRecord(recordData);
    res.status(201).json(newRecord);
};

// Обновление записи домашнего задания
exports.updateHomeworkRecord = (req, res) => {
    const recordId = req.params.id;
    const updatedRecordData = req.body;
    updateHomeworkRecord(recordId, updatedRecordData);
    res.send('Záznam o domácím úkolu byl úspěšně aktualizován');
};

exports.deleteHomeworkRecord = (req, res) => {
    const recordId = req.params.id;
    deleteHomeworkRecord(recordId);
    res.send('Záznam o domácím úkolu byl úspěšně odstraněn');
};
