const nodemailer = require('nodemailer');

// Setup Nodemailer transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'protikm2580@gmail.com',
        pass: 'protik922007@'
    }
});

// Send email
transporter.sendMail({
    from: '"Pro Shop" <protikm2580@gmail.com>',
    to: 'customer-email@example.com',
    subject: 'Order Confirmation',
    text: 'Thank you for your purchase!'
});
