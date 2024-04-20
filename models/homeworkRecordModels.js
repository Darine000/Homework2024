// homeworkRecordModel.js

// Подключение библиотеки для работы с файловой системой
const fs = require('fs');
const path = require('path');

// Путь к папке, где будут храниться записи о выполненных домашних заданиях
const homeworkRecordsFolderPath = path.join(__dirname, 'data', 'homeworkRecords');

// Функция для чтения всех записей о выполненных домашних заданиях из файла
function getAllHomeworkRecords() {
    try {
        const files = fs.readdirSync(homeworkRecordsFolderPath);
        const homeworkRecords = files.map(file => {
            const filePath = path.join(homeworkRecordsFolderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return { id: file.replace('.json', ''), ...data };
        });
        return homeworkRecords;
    } catch (error) {
        throw new Error('Failed to read homework records: ' + error.message);
    }
}

// Функция для создания новой записи о выполненном домашнем задании
function createHomeworkRecord(homeworkRecord) {
    try {
        const id = Math.random().toString(36).substr(2, 9); // Генерация случайного ID
        const filePath = path.join(homeworkRecordsFolderPath, `${id}.json`);
        fs.writeFileSync(filePath, JSON.stringify(homeworkRecord), 'utf8');
        return { id, ...homeworkRecord };
    } catch (error) {
        throw new Error('Failed to create homework record: ' + error.message);
    }
}

// Экспорт функций для использования в других модулях
module.exports = {
    getAllHomeworkRecords,
    createHomeworkRecord
};
