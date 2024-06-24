const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const imgsUpload = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'gallery', maxCount: 18 }]);
//All paths start with 'api/albums'

router.get('/', albumsCtrl.index);
router.get('/:id', albumsCtrl.show);
router.post('/', ensureLoggedIn, imgsUpload, albumsCtrl.create);
router.delete('/photo/:id', ensureLoggedIn, albumsCtrl.deletePhoto);
router.delete('/:id', ensureLoggedIn, albumsCtrl.delete);
router.put('/photo/:id', ensureLoggedIn, albumsCtrl.updatePhotoOrder);
router.put('/order/:id', ensureLoggedIn, albumsCtrl.updateOrder);
router.put('/:id', ensureLoggedIn, imgsUpload, albumsCtrl.update);

module.exports = router;