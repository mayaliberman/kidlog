const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const sendEmail = async (options) => {
  //create a transporter

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //define the email options
  const mailOptions = {
    from: 'Maya Liberman <hello@kidlog.com>',
    to: options.email,
    subject: options.subject,
    html: options.message,
    // html
  };

  //actually send the email
  await transporter.sendMail(mailOptions);
};

// exports.sendgridEmail = async (options) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: options.email,
//     from: 'mayaliberman1@gmail.com',
//     subject: options.subject,
//     text: options.message,
//     html: options.message,
//   };

//   await sgMail.send(msg);
// };

module.exports = sendEmail;
