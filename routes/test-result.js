var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* Post test status */
router.post('/test-result', function(req, res, next) {
  console.log('test-result', req.body);

  var filePath = path.join(__dirname, '../uploads', `/${Date.now()}.gz`)
  console.log(filePath);

  req.pipe(fs.createWriteStream(filePath));
  req.on('end', _ => res.send(''));

  // fs.open(filePath, 'w', function(err, fd) {  
  //     fs.write(fd, req.body, 0, req.body.length, null, function(err) {
  //         if (err) throw 'error writing file: ' + err;
  //         fs.close(fd, function() {
  //             console.log('wrote the file successfully');
  //             res.status(200).end();
  //         });
  //     });
  // });
});

module.exports = router;
