var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

