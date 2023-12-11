const express = require('express');
const router = express.Router();
const resumesCtrl = require('../../controllers/api/resumes');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const pdfsUpload = upload.fields([{ name: 'choreo', maxCount: 1 }, { name: 'perf', maxCount: 1 }]);
//All paths start with 'api/resumes'


router.get('/', resumesCtrl.show);
router.put('/', ensureLoggedIn, pdfsUpload, resumesCtrl.update);

module.exports = router;