(function () {
    'use strict';

    module.exports = {
        createOrder: createOrder,
        fetchOrders: fetchOrders,
        fetchOrderById: fetchOrderById,
        
        fetchOrderByIdClient: fetchOrderByIdClient,
        
        fetchOrderByClientName: fetchOrderByClientName,
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
        return OrderModel.find({id_order:orderId})
            .exec();
    };
    function fetchOrderByIdClient(idClient) {
        console.log("idClient: ",idClient)
        return OrderModel.find({"client.client_doc_id": idClient})
            .exec();
    };
    function fetchOrderByClientName(clientName) {
        const nameToSearch = new RegExp("^" + clientName);
        return OrderModel.find({"client.client_name":nameToSearch})
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