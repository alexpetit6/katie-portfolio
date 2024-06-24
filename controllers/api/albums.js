const resize = require('../../config/resize-img');
const uploadFile = require('../../config/upload-file');
const Album = require('../../models/album');

module.exports = {
  index,
  show,
  create,
  updateOrder,
  update,
  delete: deleteAlbum,
  deletePhoto,
  updatePhotoOrder
};

async function index(req, res) {
  const albums = await Album.find({}).sort('order').exec();
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
    const thumbnailresize = await resize(req.files['thumbnail'][0].buffer);
    req.files['thumbnail'][0].buffer = thumbnailresize;
    const thumbnailURL = await uploadFile(req.files['thumbnail'][0]);
    const photos = await Promise.all(req.files['gallery'].map(async function(p, i) {
      const url = await uploadFile(p);
      return {url: url, order: i};
    }));
    const albumsLength = await Album.find({}).sort('date').exec();
    const album = await Album.create({
      title: req.body.title,
      category: req.body.category,
      thumbnail: thumbnailURL,
      role: req.body.role,
      theater: req.body.theater,
      order: albumsLength.length,
    });
    photos.forEach((p) => album.gallery.push({url: p.url, order: p.order})); 
    await album.save();
    const albums = await Album.find({}).sort('date').exec();
    res.json(albums);
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
      req.body,
      {new: true}
    );
    if (req.files['thumbnail']) {
      const highResThumbnailURL = await uploadFile(req.files['thumbnail'][0])
      const thumbnailResize = await resize(req.files['thumbnail'][0].buffer);
      req.files['thumbnail'][0].buffer = thumbnailResize;
      const thumbnailURL = await uploadFile(req.files['thumbnail'][0]);
      updatedAlbum.thumbnail = thumbnailURL;
      updatedAlbum.photos.splice(0, 1, highResThumbnailURL);
    };
    if (req.files['gallery']) {
      const galleryLength = updatedAlbum.gallery.length;
      const newPhotoURLs = await Promise.all(req.files['gallery'].map(async (p, i) => {
        const url = await uploadFile(p);
        return {url: url, order: galleryLength + i}
      }));
      newPhotoURLs.forEach((p) => updatedAlbum.gallery.push({url: p.url, order: p.order}));
    };
    await updatedAlbum.save();
    res.json(updatedAlbum);
  } catch (err) {
    console.log(err);
  }
}

async function updateOrder(req, res) {
  const prevOrder = Number(req.body.prevOrder);
  const order = Number(req.body.order);
  const prevAlbum = await Album.findOne({order: order});
  const thisAlbum = await Album.findById(req.params.id);
  prevAlbum.order = prevOrder;
  thisAlbum.order = order;
  await prevAlbum.save();
  await thisAlbum.save();
  const albums = await Album.find({}).sort('order').exec();
  res.json(albums);
}

async function deleteAlbum(req, res) {
  try {
    const prevAlbums = await Album.find({}).sort('date').exec();
    const deletedAlbum = await Album.findById(req.params.id);
    for (let i = 0; i < prevAlbums.length; i++) {
      if (i <= deletedAlbum.order) continue;
      prevAlbums[i].order = prevAlbums[i].order - 1;
      await prevAlbums[i].save();
    }
    await Album.deleteOne({_id: req.params.id});
    const albums = await Album.find({}).sort('order').exec();
    res.json(albums);
  } catch (err) {
    res.json(err);
  }
}

async function deletePhoto(req, res) {
  try {
    const photoUrl = req.body.url;
    const album = await Album.findById(req.params.id);
    const photoIdx = album.gallery.findIndex((p) => p.url === photoUrl);
    const photo = album.gallery[photoIdx];
    for (let i = 0; i < album.gallery.length; i++) {
      if (i <= photo.order) continue;
      album.gallery[i].order = album.gallery[i].order - 1;
      // await album.save();
    }
    album.gallery.splice(photoIdx, 1);
    await album.save();
    res.json(album);
  } catch (err) {
    console.log(err)
  }
}

async function updatePhotoOrder(req, res) {
  try {
    const prevOrder = req.body.prevOrder;
    const order = req.body.order;
    const album = await Album.findById(req.params.id);
    const replIdx = album.gallery.findIndex((p) => p.order === order);
    const newIdx = album.gallery.findIndex((p) => p.order === prevOrder);
    console.log(album.gallery[replIdx].order)
    album.gallery[replIdx].order = prevOrder;
    album.gallery[newIdx].order = order;
    await album.save();
    console.log(album.gallery[replIdx].order)
    res.json(album);
  } catch (err) {
    console.log(err)
  }
}