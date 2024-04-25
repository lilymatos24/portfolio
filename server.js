const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'liangelique4@gmail.com',
      pass: 'xdkl azgb bfnc ddhl'
    }
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"Portfolio Contact Form" <your-email@gmail.com>', // Sender address
    to: 'your-email@gmail.com', // List of receivers
    subject: 'New Message from Portfolio Contact Form', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Failed to send message');
    } else {
      console.log('Message sent: %s', info.messageId);
      res.send('Message sent successfully!');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
