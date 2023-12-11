const uploadFile = require('../../config/upload-file');
const Resume = require('../../models/resume');

module.exports = {
  show,
  update
};

async function show(req, res) {
  try {
    const resume = await Resume.findOne({});
    res.json(resume);
  }
  catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const resume = await Resume.findOne({});
    if (req.files['choreo']) {
      const choreo = await uploadFile(req.files['choreo'][0], true);
      resume.choreo = choreo;
    } 
    if (req.files['perf']) {
      const perf = await uploadFile(req.files['perf'][0], true);
      resume.perf = perf;
    } 
    await resume.save();
    res.json(resume);
  } catch (err) {
    console.log(err);
  }
}
