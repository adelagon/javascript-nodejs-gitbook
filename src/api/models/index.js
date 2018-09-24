let Sequelize = require('sequelize');
let config = require('../config.json');

var sequelize = new Sequelize(config.db);

var db = {
    "Authors": sequelize.import('./authors'),
    "Books": sequelize.import('./books')
};

module.exports = db;
