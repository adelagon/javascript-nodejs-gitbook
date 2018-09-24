let Sequelize = require('sequelize');
let config = require('../config.json');

var sequelize = new Sequelize(config.db);

let Authors = sequelize.import('./authors');
let Books = sequelize.import('./books');
let Publishers = sequelize.import('./publishers');

var db = {
    "Authors": Authors,
    "Books": Books,
    "Publishers": Publishers,
    "sequelize": sequelize
};


module.exports = db;
