var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 9890));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/none', ['jd']);
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Cat = require('./cat.model.js');
var Ran = require('./ran.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');

    // APIs
    // select all
    app.get('/cats', function(req, res) {
        Cat.find({}, function(err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    });

    // count all
    app.get('/cats/count', function(req, res) {
        Cat.count(function(err, count) {
            if (err) return console.error(err);
            res.json(count);
        });
    });

    // create
    app.post('/cat', function(req, res) {
        var obj = new Cat(req.body);
        obj.save(function(err, obj) {
            if (err) return console.error(err);
            res.status(200).json(obj);
        });
    });

    //create technical
    app.post('/ran', function(req, res) {
        var obj1 = new Ran(req.body);
        obj1.save(function(err, obj1) {
            if (err) return console.error(err);
            res.status(200).json(obj1);
        });
    });

    // find by id
    app.get('/cat/:id', function(req, res) {
        Cat.findOne({ _id: req.params.id }, function(err, obj) {
            if (err) return console.error(err);
            res.json(obj);
        })
    });

    // update by id
    app.put('/cat/:id', function(req, res) {
        Cat.findOneAndUpdate({ _id: req.params.id }, req.body, function(err) {
            if (err) return console.error(err);
            res.sendStatus(200);
        })
    });

    // delete by id
    app.delete('/cat/:id', function(req, res) {
        Cat.findOneAndRemove({ _id: req.params.id }, function(err) {
            if (err) return console.error(err);
            res.sendStatus(200);
        });
    });


    // all other routes are handled by Angular
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../../dist/index.html'));
    });

    app.listen(app.get('port'), function() {
        console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
    });
});

module.exports = app;