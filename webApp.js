var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var httpServer = require("http").Server(app);
var evtserver = require('./evtServer.js').listen(httpServer);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/controller/:sid', function(req,res) {
  res.render('controller', {sid:req.params.sid});
})

httpServer.listen(3000, function() {
  console.log("Express-Server laeuft auf dem Port 3000");
});
