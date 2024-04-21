const fs = require('fs');
const path = require('path');

// Функция для получения всех изображений в галерее
exports.getAllImages = async (req, res) => {
    try {
        // Получение всех изображений из файловой системы
        const images = fs.readdirSync('uploads');
        res.json(images);
    } catch (error) {
        console.error('Ошибка при получении изображений:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
};

// Функция для получения изображения по его имени файла
exports.getImageByName = async (req, res) => {
    const { filename } = req.params;
    try {
        // Проверка существования файла
        if (!fs.existsSync(path.join('uploads', filename))) {
            return res.status(404).json({ message: 'Изображение не найдено' });
        }
        // Отправка файла клиенту
        res.sendFile(path.join(__dirname, '../uploads', filename));
    } catch (error) {
        console.error('Ошибка при получении изображения:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
};

// Функция для удаления изображения по его имени файла
exports.deleteImageByName = async (req, res) => {
    const { filename } = req.params;
    try {
        // Удаление файла из файловой системы
        fs.unlinkSync(path.join('uploads', filename));
        res.json({ message: 'Изображение успешно удалено' });
    } catch (error) {
        console.error('Ошибка при удалении изображения:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
};

// Функция для загрузки изображения на сервер
exports.uploadImage = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'Файл не загружен' });
        }

        // Получаем загруженный файл из запроса
        const imageFile = req.files.image;

        // Генерируем уникальное имя для файла
        const fileName = Date.now() + '_' + imageFile.name;

        // Путь для сохранения изображения на сервере
        const uploadPath = path.join(__dirname, '../uploads/', fileName);

        // Сохраняем файл на сервере
        imageFile.mv(uploadPath, (error) => {
            if (error) {
                console.error('Ошибка при сохранении изображения:', error);
                return res.status(500).json({ message: 'Ошибка при сохранении изображения' });
            }
            res.status(201).json({ message: 'Изображение успешно загружено', imagePath: uploadPath });
        });
    } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
};
