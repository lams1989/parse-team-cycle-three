(function () {
    'use strict';

    module.exports = {
        addClient: addClient,
        getClients: getClients,
        getClientById: getClientById,
        getClientByName: getClientByName
        
    };

    var ClientService = require('./client.module')().ClientService;

    function addClient(req, res, next) {
        ClientService.createClient(req.body)
            .then(success)
            .catch(failure);
        function success(data) {
            req.response = data;
            next();
        }
        function failure(error) {
            next(error);
        }
    };

    function getClients(req, res, next) {
        ClientService.fetchClients()
            .then(success)
            .catch(failure);
        function success(data) {
            req.response = data;
            next();
        }
        function failure(err) {
            next(err);
        }
    };

    function getClientById(req, res, next) {
        ClientService.fetchClientById(req.params.id)
            .then(success)
            .catch(error);
        function success(data) {
            req.response = data;
            next();
        }
        function error(err) {
            next(err);
        }
    };

    function getClientByName(req, res, next) {
        ClientService.fetchClientByName(req.params.clientName)
            .then(success)
            .catch(failure);
        function success(data) {
            req.response = data;
            next();
        }
        function failure(err) {
            next(err);
        }
    };

    
   

})();
