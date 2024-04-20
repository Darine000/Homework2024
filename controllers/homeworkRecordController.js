const HomeworkRecord = require('../models/homeworkRecord');

exports.getAllHomeworkRecords = async (req, res) => {
    try {
        const records = await HomeworkRecord.find();
        res.json(records);
    } catch (error) {
        console.error('Error getting homework records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Другие методы контроллера для работы с записями о выполнении ДЗ
