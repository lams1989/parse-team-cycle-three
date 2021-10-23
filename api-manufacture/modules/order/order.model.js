(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var OrderSchema = new Schema({
        id_order: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        seller_id: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        description: {
            type: Array,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        client: {
            client_id: {
                type: Number,
                required: true
            },
            client_name: {
                type: String,
                required: true
            },
        }
    });

    module.exports = mongoose.model('orders', OrderSchema);
})();