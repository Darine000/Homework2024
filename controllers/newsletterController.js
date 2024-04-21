const Newsletter = require('../models/newsletterModel');

exports.getAllNewsletters = async (req, res) => {
    try {
        const newsletters = await Newsletter.find();
        res.json(newsletters);
    } catch (error) {
        console.error('Error getting newsletters:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getNewsletterById = async (req, res) => {
    const { id } = req.params;
    try {
        const newsletter = await Newsletter.findById(id);
        if (!newsletter) {
            return res.status(404).json({ message: 'Newsletter not found' });
        }
        res.json(newsletter);
    } catch (error) {
        console.error('Error getting newsletter by id:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createNewsletter = async (req, res) => {
    const { title, content } = req.body;
    const newNewsletter = new Newsletter({ title, content });
    try {
        const savedNewsletter = await newNewsletter.save();
        res.status(201).json(savedNewsletter);
    } catch (error) {
        console.error('Error creating newsletter:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

exports.updateNewsletter = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedNewsletter = await Newsletter.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNewsletter) {
            return res.status(404).json({ message: 'Newsletter not found' });
        }
        res.json(updatedNewsletter);
    } catch (error) {
        console.error('Error updating newsletter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteNewsletter = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNewsletter = await Newsletter.findByIdAndDelete(id);
        if (!deletedNewsletter) {
            return res.status(404).json({ message: 'Newsletter not found' });
        }
        res.json({ message: 'Newsletter deleted successfully' });
    } catch (error) {
        console.error('Error deleting newsletter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
