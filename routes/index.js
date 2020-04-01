var express = require('express');
var router = express.Router();
// const ctrlIM = require('../controller/messenger');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {title: 'Instand Messaging'})
});
// router.post('/message', ctrlIM.sendMessage);
// router.delete('/message/:message_id', ctrlIM.killOne);

module.exports = router;
