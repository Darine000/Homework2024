const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');
const homeworkController = require('./controllers/homeworkController');
const creativeChallengeController = require('./controllers/creativeChallengeController');
const newsletterController = require('./controllers/newsletterController');

const app = express();

app.use(bodyParser.json());

app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.put('/users/:userId', userController.updateUser);
app.delete('/users/:userId', userController.deleteUser);

app.get('/courses', courseController.getAllCourses);

app.get('/homework/:courseId', homeworkController.getHomeworkByCourseId);

app.get('/creative-challenges', creativeChallengeController.getAllCreativeChallenges);
app.post('/creative-challenges', creativeChallengeController.createCreativeChallenge);

app.post('/newsletter', newsletterController.sendNewsletter);

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Hlavní port');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
