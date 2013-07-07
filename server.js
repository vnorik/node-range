var app = require(__dirname + '/app');
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Listening to port ', port);
});