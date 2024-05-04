const About = require('../../models/about');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const about = await About.findOne({});
    console.log(about.text)
    res.json(about);
  }
  catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const updatedAbout = await About.findOneAndUpdate({}, req.body, {new: true});
    res.json(updatedAbout);
  } catch (err) {
    console.log(err);
  }
}
