exports.sendNewsletter = (req, res) => {
    const { email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-password' 
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
