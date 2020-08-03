const sgMail = require('@sendgrid/mail');
sendgrid = sgMail.setApiKey(
  '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'
);
const msg = {
  to: 'mayaliberman1@gmail.com',
  from: 'mayaliberman1@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);
//ES6
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );
//ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();
