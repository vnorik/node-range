var express = require('express');
var app = express();
var pages = require(__dirname + '/controllers/pages');
var ejsLocals = require('ejs-locals');

//configuration settings
app.engine('ejs', ejsLocals);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

//set view locals
app.use(function(req, res, next) {
    app.locals.route = req.url;
    next();
});

//mount routes
app.get('/', function (req, res) {
    res.redirect('home');
});
app.get('/home', pages.home);
app.get('/about', pages.about);

module.exports = app;