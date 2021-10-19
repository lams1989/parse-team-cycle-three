(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var ClientMiddleware = require('./client.module')().ClientMiddleware;

    router.post('/',
        ClientMiddleware.addClient,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        ClientMiddleware.getClients,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:id',
        ClientMiddleware.getClientById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/n/:clientName',
        ClientMiddleware.getClientByName,
        function (req, res) {
            res.status(200).json(req.response);
        });

        
        /**optionals update and remove */
    router.patch('/upd/:clientId',
    ClientMiddleware.modifyClient,
    function (req, res) {
        res.status(200).json(req.response);
    });

router.delete('/:id',
    ClientMiddleware.removeClient,
    function (req, res) {
        res.status(200).json(req.response);
    });

    module.exports = router;

})();