const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  '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'
);

const msg = {
  to: 'mayaliberman1@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);
