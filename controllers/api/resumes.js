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
    if (req.files['choreoResume']) resume.choreo = req.files['choreoResume'][0];
    if (req.files['perfResume']) resume.perf = req.files['perfResume'][0];
    await resume.save();
    res.json(resume);
  } catch (err) {
    console.log(err);
  }
}

async function addPhotos(req, res) {
  try {
    const performance = await Performance.findOne({});
    if (req.files['photos']) {
      const newPhotoURLs = await Promise.all(req.files['photos'].map(async (p) => {
        return await uploadFile(p);
      }));
      newPhotoURLs.forEach((p) => performance.photos.push(p));
    };
    await performance.save();
    res.json(performance);
  }
  catch (err) {
    console.log(err)
  }
}

async function deletePhoto(req, res) {
  try {
    const photoUrl = req.body.url;
    const performance = await Performance.findOne({});
    const photoIdx = performance.photos.findIndex((p) => p === photoUrl);
    performance.photos.splice(photoIdx, 1);
    await performance.save();
    res.json(performance);
  } catch (err) {
    console.log(err);
  }
}