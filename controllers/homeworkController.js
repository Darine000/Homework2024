const Homework = require('../models/homeworkModels');

exports.getAllHomework = async (req, res) => {
    try {
        const homework = await Homework.find();
        res.json(homework);
    } catch (error) {
        console.error('Error getting homework:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getHomeworkById = async (req, res) => {
    const { id } = req.params;
    try {
        const homework = await Homework.findById(id);
        if (!homework) {
            return res.status(404).json({ message: 'Homework not found' });
        }
        res.json(homework);
    } catch (error) {
        console.error('Error getting homework by id:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Другие методы контроллера для обработки запросов к ДЗ
