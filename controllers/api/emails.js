const sendMail = require('../../config/send-nodemail')

module.exports = {
  send
};

async function send(req, res) {
  try {
    const {name, email, subject, msg} = req.body;
    const success = await sendMail(name, email, subject, msg);
    res.json(success);
  }
  catch (err) {
    console.log(err);
  }
}
