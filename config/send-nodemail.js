const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_PASS,
  },
});

module.exports = async function sendMail(name, email, subject, msg) {
  const info = await transporter.sendMail({
    from: 'from.katies.portfolio@gmail.com', 
    to: "alexpetit6@gmail.com", 
    subject: subject, 
    html: 
      `
      <p>
        Reply to: <strong>${name} @ ${email}</strong>
        <div style="margin-bottom: 20px;"></div>
        ${msg}
      </p>
      `,
  });

  console.log("Message sent: %s", info.messageId);
}