(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');
    require('dotenv').config();

    var mongodbConfig = require('../../config/mongodb/mongodb-config').mongodb;
    const SERVER = process.env.SERVER;
    const DATABASE = process.env.DATABASE;
    const USERDB = process.env.USERDB;
    const PASSWORD = process.env.PASSWORD;

    function init() {
        var options = {
            promiseLibrary: require('bluebird'),
            useNewUrlParser: true
        };

        var connectionString = prepareConnectionString(mongodbConfig);

        mongoose.connect(connectionString, options)
            .then(function (result) {
                console.log("MongoDB connection successful. DB: " + connectionString);
            })
            .catch(function (error) {
                console.log(error.message);
                console.log("Error occurred while connecting to DB: : " + connectionString);
            });
    }

    function prepareConnectionString(config) {
        var connectionString = 'mongodb+srv://';

        if (USERDB) {
            connectionString += USERDB + ':' + PASSWORD + '@';
        }

        connectionString += SERVER + '/' + DATABASE;

        return connectionString;
    }

})();