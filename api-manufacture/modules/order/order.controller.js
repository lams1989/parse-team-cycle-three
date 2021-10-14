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

    router.get('/:OrderId',
        OrderMiddleware.getOrderById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:OrderId',
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