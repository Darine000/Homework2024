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

exports.createHomework = async (req, res) => {
    const { title, description, deadline } = req.body;
    const newHomework = new Homework({
        title,
        description,
        deadline
    });

    try {
        const savedHomework = await newHomework.save();
        res.status(201).json(savedHomework);
    } catch (error) {
        console.error('Error creating homework:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateHomework = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const updatedHomework = await Homework.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedHomework) {
            return res.status(404).json({ message: 'Homework not found' });
        }
        res.json(updatedHomework);
    } catch (error) {
        console.error('Error updating homework:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteHomework = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedHomework = await Homework.findByIdAndDelete(id);
        if (!deletedHomework) {
            return res.status(404).json({ message: 'Homework not found' });
        }
        res.json({ message: 'Homework deleted successfully' });
    } catch (error) {
        console.error('Error deleting homework:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
