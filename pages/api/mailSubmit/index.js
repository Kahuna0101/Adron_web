const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'YourEmailServiceProvider', // e.g., 'Gmail'
    auth: {
      user: 'your@email.com', // Your email address
      pass: 'your-email-password', // Your email password
    },
  });

  const mailOptions = {
    from: 'your@email.com',
    to: 'abc@gmail.com', // The recipient email address
    subject: 'New Form Submission',
    text: JSON.stringify(formData, null, 2), // Convert form data to a readable JSON string
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
