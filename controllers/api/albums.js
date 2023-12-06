const uploadFile = require('../../config/upload-file');
const Album = require('../../models/album');

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteAlbum,
};

async function index(req, res) {
  const albums = await Album.find({}).sort('date').exec();
  res.json(albums);
}

async function show(req, res) {
  try {
    const album = await Album.findById(req.params.id);
    res.json(album);
  } catch (err) {
    console.log(err)
  }
}

async function create(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const thumbnailURL = await uploadFile(req.files['thumbnail'][0]);
    const photoURLs = await Promise.all(req.files['photos'].map(async (p) => {
      return await uploadFile(p);
    }));
    const album = await Album.create({
      title: req.body.title,
      category: req.body.category,
      thumbnail: thumbnailURL,
      photos: photoURLs,

    });
    res.json(album);
  } catch (err) {
    console.log(err)
  }
}

async function update(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const updatedAlbum = await Album.findOneAndUpdate(
      {_id: req.params.id},
      {title: req.body.title},
      {new: true}
    );
    if (req.files['thumbnail']) {
      const thumbnailURL = await uploadFile(req.files['thumbnail'][0]);
      updatedAlbum.thumbnail = thumbnailURL;
    };
    if (req.files['photos']) {
      const newPhotoURLs = await Promise.all(req.files['photos'].map(async (p) => {
        return await uploadFile(p);
      }));
      newPhotoURLs.forEach((p) => updatedAlbum.photos.push(p));
    };
    await updatedAlbum.save();
    res.json(updatedAlbum);
  } catch (err) {
    console.log(err);
  }
}

async function deleteAlbum(req, res) {
  try {
    await Album.deleteOne({_id: req.params.id});
    const albums = await Album.find({}).sort('date').exec();
    res.json(albums);
  } catch (err) {
    res.json(err);
  }
}