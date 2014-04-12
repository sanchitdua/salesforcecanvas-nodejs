var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/canvas', function(req, res) {
  sr_param = request.form['signed_request']
	secret = os.environ.get('CANVAS_SECRET')
  res.render('index', { title: 'Express' });

});

module.exports = router;
