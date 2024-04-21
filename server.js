const express = require('express');
const app = express();
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const homeworkRoutes = require('./routes/homeworkRoutes');
const homeworkRecordRoutes = require('./routes/homeworkRecordRoutes');
const creativeChallengeRoutes = require('./routes/ccRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

const PORT = process.env.PORT || 4000;

// Middleware для обработки JSON
app.use(express.json());

// Маршруты для курсов
app.use('/api/courses', courseRoutes);

// Маршруты для пользователей
app.use('/api/users', userRoutes);

// Маршруты для домашних заданий
app.use('/api/homework', homeworkRoutes);

app.use('/api/homeworkRecord', homeworkRecordRoutes);
// Маршруты для творческих вызовов
app.use('/api/creative-challenges', creativeChallengeRoutes);

// Маршруты для рассылки новостей
app.use('/api/newsletter', newsletterRoutes);

// Маршруты для галереи
app.use('/api/gallery', galleryRoutes);

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.use((req, res, next) => {
  res.status(404).send("Страница не найдена");
});
// Слушаем указанный порт
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
