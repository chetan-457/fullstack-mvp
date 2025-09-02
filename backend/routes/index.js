var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add inside index.js or create a new route file
router.get('/hello', (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = router;
