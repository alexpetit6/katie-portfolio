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
  try {
    const info = await transporter.sendMail({
      from: process.env.SENDER_ADDRESS, 
      to: process.env.TO_ADDRESS, 
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
    return true
  } catch (error) {
    
  }
}