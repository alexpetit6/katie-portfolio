const express = require('express');
const router = express.Router();
const emailsCtrl = require('../../controllers/api/emails');
//All paths start with 'api/emails'

router.post('/', emailsCtrl.send);

module.exports = router;