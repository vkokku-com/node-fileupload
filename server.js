var express = require('express');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('home.html');
});
app.get('/home', function(req, res) {
    res.render('home.html');
});
app.get('/about', function(req, res) {
    res.render('about.html');
});
app.get('/contact', function(req, res) {
    res.render('contact.html');
});
app.post('/fileupload',function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(files);
        var newpath = '/Users/vkokku/Documents/uploads/' + files.filetoupload.name;
        fs.rename(files.filetoupload.path, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded!');
            res.end();
          });
    });
});
    
app.listen(8080, function() {
    console.log('Server ready on port 8080');
});