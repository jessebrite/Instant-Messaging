var express = require('express');
var router = express.Router();
const ctrlIM = require('../controller/messenger');

/* GET home page. */
router.get('/', ctrlIM.findAll);
router.post('/message', ctrlIM.sendMessage);
router.delete('/message/:message_id', ctrlIM.killOne);

module.exports = router;
