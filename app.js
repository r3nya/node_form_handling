var express = require('express');
var bodyParser = require('body-parser');

var app     = express();
var port    = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
        title   : 'Hello',
        csrf    : 'csfr_key_blablalba'
    });
});

app.post('/', function (req, res) {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/thank-you');
});

app.get('/thank-you', function(req, res) {
    res.send('Tnank you!');
});

app.listen(port);
console.log('The magic happens on port ' + port);

