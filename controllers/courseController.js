const fs = require('fs');

const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const newData = req.body;

    try {
        const coursesData = fs.readFileSync('courses.json', 'utf8');
        const courses = JSON.parse(coursesData);

        const courseIndex = courses.findIndex(course => course.id === courseId);

        if (courseIndex === -1) {
            return res.status(404).json({ message: 'Курс не найден' });
        }

        const updatedCourse = { ...courses[courseIndex], ...newData };
        courses[courseIndex] = updatedCourse;

        fs.writeFileSync('courses.json', JSON.stringify(courses, null, 2));

        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCourse = async (req, res) => {
    const { title, description, startDate, endDate } = req.body;
    const newCourse = {
        id: Date.now().toString(), // Генерируем уникальный идентификатор для нового курса
        title,
        description,
        startDate,
        endDate
    };

    try {
        let coursesData;
        try {
            coursesData = fs.readFileSync('courses.json', 'utf8');
        } catch (err) {
            coursesData = '[]'; // Если файл не существует, начинаем с пустого массива
        }
        
        const courses = JSON.parse(coursesData);

        courses.push(newCourse);

        fs.writeFileSync('courses.json', JSON.stringify(courses, null, 2));

        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    const courseId = req.params.id;

    try {
        const coursesData = fs.readFileSync('courses.json', 'utf8');
        let courses = JSON.parse(coursesData);

        const updatedCourses = courses.filter(course => course.id !== courseId);

        if (courses.length === updatedCourses.length) {
            return res.status(404).json({ message: 'Курс не найден' });
        }

        fs.writeFileSync('courses.json', JSON.stringify(updatedCourses, null, 2));

        res.status(200).json({ message: 'Курс успешно удален' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    deleteCourse,
    updateCourse // Ваша уже существующая функция обновления курса
};
