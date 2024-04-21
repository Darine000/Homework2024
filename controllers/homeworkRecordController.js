const HomeworkRecord = require('../models/homeworkRecordModels');

exports.getAllHomeworkRecords = async (req, res) => {
    try {
        const records = await HomeworkRecord.find();
        res.json(records);
    } catch (error) {
        console.error('Error getting homework records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getHomeworkRecordById = async (req, res) => {
    const { id } = req.params;
    try {
        const record = await HomeworkRecord.findById(id);
        if (!record) {
            return res.status(404).json({ message: 'Homework record not found' });
        }
        res.json(record);
    } catch (error) {
        console.error('Error getting homework record by id:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createHomeworkRecord = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newRecord = new HomeworkRecord({ title, description });
        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        console.error('Error creating homework record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateHomeworkRecord = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const updatedRecord = await HomeworkRecord.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Homework record not found' });
        }
        res.json(updatedRecord);
    } catch (error) {
        console.error('Error updating homework record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteHomeworkRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRecord = await HomeworkRecord.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Homework record not found' });
        }
        res.json({ message: 'Homework record deleted successfully' });
    } catch (error) {
        console.error('Error deleting homework record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
