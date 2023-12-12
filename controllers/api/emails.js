const sendMail = require('../../config/send-nodemail')

module.exports = {
  send
};

async function send(req, res) {
  try {
    const {name, email, subject, msg} = req.body;
    await sendMail(name, email, subject, msg);
    console.log(req.body);
    // await sendMail();
  }
  catch (err) {
    console.log(err);
  }
}
