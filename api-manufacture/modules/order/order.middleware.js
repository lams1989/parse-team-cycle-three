(function () {
    'use strict';

    module.exports = {
        addOrder: addOrder,
        getOrders: getOrders,
        getOrderById: getOrderById,
        modifyOrder: modifyOrder,
        removeOrder: removeOrder,
        getOrderByClientName:getOrderByClientName,
        getOrderByIdClient:getOrderByIdClient
    };

    var OrderService = require('./order.module')().OrderService;

    function addOrder(req, res, next) {
        OrderService.createOrder(req.body)
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

    function getOrders(req, res, next) {
        OrderService.fetchOrders()
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

    function getOrderById(req, res, next) {
        OrderService.fetchOrderById(req.params.orderId)
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

    function getOrderByIdClient(req, res, next) {
        OrderService.fetchOrderByIdClient(req.params.idClient)
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
    function getOrderByClientName(req, res, next) {
        OrderService.fetchOrderByClientName(req.params.clientName)
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
    function modifyOrder(req, res, next) {
        OrderService.updateOrder(req.params.orderId, req.body)
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

    function removeOrder(req, res, next) {
        OrderService.deleteOrder(req.params.orderId)
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

})();
