// server.js

const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');
const homeworkController = require('./controllers/homeworkController');
const creativeChallengeController = require('./controllers/creativeChallengeController');
const newsletterController = require('./controllers/newsletterController');

const app = express();

app.use(bodyParser.json());

// Роуты для пользователей
app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.put('/users/:userId', userController.updateUser);
app.delete('/users/:userId', userController.deleteUser);

// Роуты для курсов
app.get('/courses', courseController.getAllCourses);

// Роуты для домашних заданий
app.get('/homework/:courseId', homeworkController.getHomeworkByCourseId);

// Роуты для Creative Challenges
app.get('/creative-challenges', creativeChallengeController.getAllCreativeChallenges);
app.post('/creative-challenges', creativeChallengeController.createCreativeChallenge);

// Роут для рассылки новостей на почту
app.post('/newsletter', newsletterController.sendNewsletter);

// Установка порта для сервера
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Hlavní port');
});
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
