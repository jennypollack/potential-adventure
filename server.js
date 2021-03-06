var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/'));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});