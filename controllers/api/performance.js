const uploadFile = require('../../config/upload-file');
const Performance = require('../../models/performance');

module.exports = {
  show,
  addPhotos,
  deletePhoto
};

async function show(req, res) {
  try {
    const performance = await Performance.find({});
    res.json(performance);
  }
  catch (err) {
    console.log(err);
  }
}

async function addPhotos(req, res) {
  try {
    const performance = await Performance.find({});
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
    const performance = await Performance.find({});
    const photoIdx = performance.photos.findIndex((p) => p === photoUrl);
    performance.photos.splice(photoIdx, 1);
    await performance.save();
    res.json(performance);
  } catch (err) {
    console.log(err)
  }
}