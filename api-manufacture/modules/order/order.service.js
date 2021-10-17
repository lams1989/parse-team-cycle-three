(function () {
    'use strict';

    module.exports = {
        createOrder: createOrder,
        fetchOrders: fetchOrders,
        fetchOrderById: fetchOrderById,
        updateOrder: updateOrder,
        deleteOrder: deleteOrder
    };

    var OrderModel = require('./order.module')().OrderModel;

    function createOrder(order) {
        return OrderModel.create(order);
    };

    function fetchOrders() {
        return OrderModel.find({})
            .exec();
    };

    function fetchOrderById(orderId) {
        return OrderModel.findById(orderId)
            .exec();
    };

    function updateOrder(orderId, order) {
        return OrderModel
            .findByIdAndUpdate(orderId, order, { new: true })
            .exec();
    };

    function deleteOrder(orderId) {
        return OrderModel
            .findByIdAndRemove(orderId)
            .exec();
    };

})();