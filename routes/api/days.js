/* Add a routes/api/days.js file and wire up a few URL paths to it. 
What routes should you create? 
Consider adhering to REST principles. 
Don't worry about fully defining the actual handlers just yet; 
simply set up the skeleton for the routes you want. 
Write your code, 
and then feel free to take a look at our suggestion 
in the hint below */

var express = require('express');
var daysRouter = express.Router();

//db already required from index.js
var Day = require('../../models/day');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


daysRouter.get('/', function(req, res, next){
    Day.findAll({})
    .then(function(result){
        res.send(result);
    })
    .catch(console.error.bind(console));

    // Day.findOrCreate({
    //     where: {
    //         id: dayNum
    //     }
    // })
    // .then(function(day){
    //     return day;
    // })
    // .catch(console.error.bind(console))

});



daysRouter.post('/', function(req, res, next){
    // var dayNum = req.params.id;
    Day.create({})
    .then(function(day){
        res.send(day);
    })
    .catch(console.error.bind(console))
});


daysRouter.post('/:id/restaurants', function(req, res, next){
    // var dayNum = req.params.id;
    // return Day.update({
    //     where: {
    //         id: dayNum,
    //         restaurant: {

    //         }
    //     }
    // })
    // .then(function(day){

    // })


});

daysRouter.post('/:id/activities', function(req, res, next){
    var dayNum = req.params.id;

});

daysRouter.post('/:id/hotels', function(req, res, next){
    var dayNum = req.params.id;

});




module.exports = daysRouter; 