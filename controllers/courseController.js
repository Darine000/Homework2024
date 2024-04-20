const Course = require('../models/courseModel');

const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const newData = req.body;

    try {
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: 'Курс не найден' });
        }

        course.title = newData.title || course.title;
        course.description = newData.description || course.description;
        course.startDate = newData.startDate || course.startDate;
        course.endDate = newData.endDate || course.endDate;

        await course.save();

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    updateCourse
};
