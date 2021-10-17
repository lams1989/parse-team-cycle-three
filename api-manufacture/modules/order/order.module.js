(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            OrderController: require('./order.controller'),
            OrderMiddleware: require('./order.middleware'),
            OrderService: require('./order.service'),
            OrderModel: require('./order.model')
        }
    }

})();