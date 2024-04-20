// Import models
const CC = require('../models/ccModels.js');

// Controller methods
exports.getAllCC = async (req, res) => {
    try {
        const cc = await CC.find();
        res.json(cc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCCById = async (req, res) => {
    try {
        const cc = await cc.findById(req.params.id);
        if (!cc) {
            return res.status(404).json({ message: 'Creative Challenges not found' });
        }
        res.json(cc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCC = async (req, res) => {
    const cc = new CC({
        title: req.body.title,
        description: req.body.description,
        // Другие поля курса...
    });

    try {
        const newCC = await cc.save();
        res.status(201).json(newCC);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};