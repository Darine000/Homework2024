const fs = require('fs');
const path = require('path');

const homeworkRecordsFolderPath = path.join(__dirname, 'data', 'homeworkRecords');

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

function createHomeworkRecord(homeworkRecord) {
    try {
        const id = Math.random().toString(36).substring(2, 9); // Генерация случайного ID
        const filePath = path.join(homeworkRecordsFolderPath, `${id}.json`);
        fs.writeFileSync(filePath, JSON.stringify(homeworkRecord), 'utf8');
        return { id, ...homeworkRecord };
    } catch (error) {
        throw new Error('Failed to create homework record: ' + error.message);
    }
}

module.exports = {
    getAllHomeworkRecords,
    createHomeworkRecord
};
