const express = require('express');
const router = express.Router();
const performanceCtrl = require('../../controllers/api/performance');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const imgsUpload = upload.fields([{ name: 'photos', maxCount: 20 }]);
//All paths start with 'api/performance'

router.get('/', performanceCtrl.show);
router.post('/', ensureLoggedIn, imgsUpload, performanceCtrl.addPhotos);
router.delete('/', ensureLoggedIn, performanceCtrl.deletePhoto);
router.put('/order/:id', ensureLoggedIn, performanceCtrl.updateOrder);

module.exports = router;