(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var OrderMiddleware = require('./order.module')().OrderMiddleware;

    router.post('/',
        OrderMiddleware.addOrder,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        OrderMiddleware.getOrders,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:orderId',
        OrderMiddleware.getOrderById,
        function (req, res) {
            res.status(200).json(req.response);
        });
        router.get('/idclient/:idClient',
        OrderMiddleware.getOrderByIdClient,
        function (req, res) {
            res.status(200).json(req.response);
        });
        router.get('/clientname/:clientName',
        OrderMiddleware.getOrderByClientName,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.put('/upd/:orderId',
        OrderMiddleware.modifyOrder,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:orderId',
        OrderMiddleware.removeOrder,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();