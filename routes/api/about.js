const express = require('express');
const router = express.Router();
const aboutCtrl = require('../../controllers/api/about');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
//All paths start with 'api/about'

router.get('/', aboutCtrl.show);
router.put('/', ensureLoggedIn, aboutCtrl.update);

module.exports = router;