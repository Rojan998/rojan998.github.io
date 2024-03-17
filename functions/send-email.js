const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Use bodyParser and cors middleware
app.use(bodyParser.json());
app.use(cors());

// Email sending route
app.post('/send-email', async (req, res) => {
  const { to, from, subject, text } = req.body;

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your@gmail.com', // Your email
      pass: 'yourpassword', // Your email account password or app password
    },
  });

  // Setup email data
  const mailOptions = {
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
