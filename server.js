var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(lessMiddleware('/less', {
    dest: '/css',
    pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

var errorHander = function (err, req, res, next) {
    console.log(err);
    res.redirect("error.html");
};
app.use(errorHander);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// this is only a temp fix for a sticky state bug in Angular 2.
// Remove when bug is fixed-----------------------------------------------
 app.use(function(req, res) {
      res.status(404);
     res.redirect('/index.html');
 });
//------------------------------------------------------------------------
app.listen(process.env.PORT || 3000);


