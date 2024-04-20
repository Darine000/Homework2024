const express = require('express');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const homeworkRoutes = require('./routes/homeworkRoutes.js');
const creativeChallengeRoutes = require('./routes/creativeChallengeRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware для обработки JSON
app.use(express.json());

// Маршруты для курсов
app.use('/api/courses', courseRoutes);

// Маршруты для пользователей
app.use('/api/users', userRoutes);

// Маршруты для домашних заданий
app.use('/api/homework', homeworkRoutes);

// Маршруты для творческих вызовов
app.use('/api/creative-challenges', creativeChallengeRoutes);

// Маршруты для рассылки новостей
app.use('/api/newsletter', newsletterRoutes);

// Маршруты для галереи
app.use('/api/gallery', galleryRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
