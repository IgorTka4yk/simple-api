var express = require('express');
var router = express.Router();

/* Post test status */
router.put('/test-update', function(req, res, next) {
  console.log(req.body);
  res.send('');
});

module.exports = router;
