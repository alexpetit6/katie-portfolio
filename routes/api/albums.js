const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
//All paths start with 'api/albums'
const imgsUpload = upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'photos', maxCount: 18 }]);

router.get('/', albumsCtrl.index);
router.get('/:id', albumsCtrl.show);
router.post('/', ensureLoggedIn, imgsUpload, albumsCtrl.create);
router.delete('/:id', ensureLoggedIn, albumsCtrl.delete);
router.put('/:id', ensureLoggedIn, upload.single('photo'), albumsCtrl.update);

module.exports = router;