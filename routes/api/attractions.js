var express = require('express');
var apiRouter = express.Router();

//db already required from index.js

var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');



apiRouter.get('/hotels', function(req, res){
    Hotel.findAll({})
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        console.error(err);
    });
});

apiRouter.get('/restaurants', function(req, res){
    Restaurant.findAll({})
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        console.error(err);
    });
});

apiRouter.get('/activities', function(req, res){
    Activity.findAll({})
    .then(function(data){
        res.send(data);
    })
    .catch(function(err){
        console.error(err);
    });
});


module.exports = apiRouter; 