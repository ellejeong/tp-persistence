/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
    date: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        defaultValue: 0
    }
}, {
    hooks: {
        beforeCreate: function(day) {
            day.date++;
        }
    }
});


Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'})

module.exports = Day;