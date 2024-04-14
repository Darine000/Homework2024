const fs = require('fs');
const path = require('path');

const challengesFilePath = path.join(__dirname, '..', 'data', 'creativeChallenges.json');

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

exports.createCreativeChallenge = (req, res) => {

    const newChallenge = req.body;

    fs.readFile(challengesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения данных');
            return;
        }
        const challenges = JSON.parse(data);
        newChallenge.id = Date.now().toString(); 
        challenges.push(newChallenge);

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
