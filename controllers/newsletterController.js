// NewsletterController.js
// Отправка рассылки
exports.sendNewsletter = (req, res) => {
    const { email, message } = req.body;

    // Здесь можно добавить логику отправки рассылки
    // Например, с использованием nodemailer

    // Пример отправки электронной почты с использованием nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Ваш email
            pass: 'your-password' // Ваш пароль
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Новости от ArtInside',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Ошибка отправки письма');
        } else {
            console.log('Email отправлен: ' + info.response);
            res.send('Рассылка успешно отправлена');
        }
    });
};
