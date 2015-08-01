var express = require('express');
var bodyParser = require('body-parser');
var signed_request = require('./signed_request')
var app = express();

app.use(bodyParser());

app.post('/canvas', function(req, res){
  console.log('inside canvas post for the secret: '+process.env.SECRET);
  secret = process.env.SECRET;
  console.log('req.body.signed_request is: '+req.body.signed_request);
  var verifier = new SignedRequest(secret, req.body.signed_request);
  verifier.verify(); // whether or not the signed request verifies ()
  verifier.data; // the data from the signed request
  res.send(verifier.data);
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
