// CreativeChallengeController.js
const fs = require('fs');
const path = require('path');

// Путь к файлу с данными о Creative Challenges
const challengesFilePath = path.join(__dirname, '..', 'data', 'creativeChallenges.json');

// Получение всех Creative Challenges
exports.getAllCreativeChallenges = (req, res) => {
    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        const challenges = JSON.parse(data);
        res.json(challenges);
    });
};

// Получение Creative Challenge по идентификатору
exports.getCreativeChallengeById = (req, res) => {
    const challengeId = req.params.id;
    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        const challenges = JSON.parse(data);
        const challenge = challenges.find(ch => ch.id === challengeId);
        if (!challenge) {
            res.status(404).send('Creative Challenge не найден');
        } else {
            res.json(challenge);
        }
    });
};

// Создание нового Creative Challenge
exports.createCreativeChallenge = (req, res) => {
    // Получение данных о новом Creative Challenge из запроса
    const newChallenge = req.body;
    // Добавление нового Creative Challenge к существующим данным
    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        const challenges = JSON.parse(data);
        newChallenge.id = Date.now().toString(); // Присваиваем уникальный ID
        challenges.push(newChallenge);
        // Запись обновленных данных обратно в файл
        fs.writeFile(challengesFilePath, JSON.stringify(challenges, null, 2), 'utf8', err => {
            if (err) {
                console.error(err);
                res.status(500).send('Ошибка записи данных');
                return;
            }
            res.status(201).json(newChallenge);
        });
    });
};

// Обновление Creative Challenge
exports.updateCreativeChallenge = (req, res) => {
    const challengeId = req.params.id;
    const updatedChallengeData = req.body;
    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        let challenges = JSON.parse(data);
        const index = challenges.findIndex(ch => ch.id === challengeId);
        if (index === -1) {
            res.status(404).send('Creative Challenge не найден');
            return;
        }
        challenges[index] = { ...challenges[index], ...updatedChallengeData };
        // Запись обновленных данных обратно в файл
        fs.writeFile(challengesFilePath, JSON.stringify(challenges, null, 2), 'utf8', err => {
            if (err) {
                console.error(err);
                res.status(500).send('Ошибка записи данных');
                return;
            }
            res.send('Creative Challenge успешно обновлен');
        });
    });
};

// Удаление Creative Challenge
exports.deleteCreativeChallenge = (req, res) => {
    const challengeId = req.params.id;
    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        let challenges = JSON.parse(data);
        challenges = challenges.filter(ch => ch.id !== challengeId);
        // Запись обновленных данных обратно в файл
        fs.writeFile(challengesFilePath, JSON.stringify(challenges, null, 2), 'utf8', err => {
            if (err) {
                console.error(err);
                res.status(500).send('Ошибка записи данных');
                return;
            }
            res.send('Creative Challenge успешно удален');
        });
    });
};
