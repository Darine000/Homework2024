const fs = require('fs');
const CC = require('../models/ccModels.js');

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
        const cc = await CC.findById(req.params.id);
        if (!cc) {
            return res.status(404).json({ message: 'Creative Challenge not found' });
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
        id: req.body.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status,
    });

    try {
        const newCC = await cc.save();
        res.status(201).json(newCC);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCC = async (req, res) => {
    const ccId = req.params.id;
    const newData = req.body;

    try {
        const cc = await CC.findById(ccId);

        if (!cc) {
            return res.status(404).json({ message: 'Creative Challenge not found' });
        }

        // Обновление данных челенджа
        cc.title = newData.title || cc.title;
        cc.description = newData.description || cc.description;
        cc.startDate = newData.startDate || cc.startDate;
        cc.endDate = newData.endDate || cc.endDate;
        cc.status = newData.status || cc.status;

        await cc.save();

        res.status(200).json(cc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteCC = async (req, res) => {
    try {
        const deletedCC = await CC.findByIdAndDelete(req.params.id);
        if (!deletedCC) {
            return res.status(404).json({ message: 'Creative Challenge not found' });
        }
        res.json({ message: 'Creative Challenge deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
