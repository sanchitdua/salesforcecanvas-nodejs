var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

});

router.post('/canvas', function(req, res) {

  secret = '9199412244496712486';
  var verifier = new SignedRequest(secret, req.body);
  verifier.verified(); // whether or not the signed request verifies
  verifier.data; // the data from the signed request
  res.send(verifier.data);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
