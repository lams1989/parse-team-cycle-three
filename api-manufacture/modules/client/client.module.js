(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            ClientController: require('./client.controller'),
            ClientMiddleware: require('./client.middleware'),
            ClientService: require('./client.service'),
            ClientModel: require('./client.model')
        }
    }

})();