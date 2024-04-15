const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');
const homeworkController = require('./controllers/homeworkController');
const creativeChallengeController = require('./controllers/creativeChallengeController');
const newsletterController = require('./controllers/newsletterController');

const app = express();

app.use(bodyParser.json());

const homeworkRecordController = require('./controllers/homeworkRecordController');
app.get('/api/homework-records', homeworkRecordController.getAllHomeworkRecords);
app.get('/api/homework-records/:id', homeworkRecordController.getHomeworkRecordById);
app.post('/api/homework-records', homeworkRecordController.createHomeworkRecord);
app.put('/api/homework-records/:id', homeworkRecordController.updateHomeworkRecord);
app.delete('/api/homework-records/:id', homeworkRecordController.deleteHomeworkRecord);

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
  console.log(`Server je spuštěn na portu ${PORT}`);
});
