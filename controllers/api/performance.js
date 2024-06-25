const uploadFile = require('../../config/upload-file');
const Performance = require('../../models/performance');

module.exports = {
  show,
  addPhotos,
  deletePhoto,
  updateOrder
};

async function show(req, res) {
  try {
    const performance = await Performance.findOne({});
    res.json(performance);
  }
  catch (err) {
    console.log(err);
  }
}

async function addPhotos(req, res) {
  try {
    const performance = await Performance.findOne({});
    const galleryLength = performance.gallery.length;
    if (req.files['photos']) {
      const newPhotoURLs = await Promise.all(req.files['photos'].map(async (p) => {
        return await uploadFile(p);
      }));
      newPhotoURLs.forEach((p, i) => performance.gallery.push({url: p, order: galleryLength + i}));
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
    const photoIdx = performance.gallery.findIndex((p) => p.url === photoUrl);
    const photo = performance.gallery[photoIdx];
    for (let i = 0; i < performance.gallery.length; i++) {
      if (i <= photo.order) continue;
      performance.gallery[i].order = performance.gallery[i].order - 1;
    }
    performance.gallery.splice(photoIdx, 1);
    await performance.save();
    res.json(performance);
  } catch (err) {
    console.log(err);
  }
}

async function updateOrder(req, res) {
  try {
    const prevOrder = Number(req.body.prevOrder);
    const order = Number(req.body.order);
    const performance = await Performance.findById(req.params.id);
    const replIdx = performance.gallery.findIndex((p) => p.order === order);
    const newIdx = performance.gallery.findIndex((p) => p.order === prevOrder);
    performance.gallery[replIdx].order = prevOrder;
    performance.gallery[newIdx].order = order;
    await performance.save();
    res.json(performance);
  } catch (err) {
    console.log(err)
  }
}