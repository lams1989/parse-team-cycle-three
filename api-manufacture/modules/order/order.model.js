(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var OrderSchema = new Schema({
        id_order: {
            type: Number,
            required: true,
            unique:true
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
        },
        date: {
            type: Date,
            default: Date.now
        },
        seller: {
            seller_id: {
                type: Number,
                required: true
            },
            seller_name: {
                type: String,
                required: true
            },
        },
        total: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        description: {
            type: Array,
            required: true
        },
        
        
    });

    module.exports = mongoose.model('orders', OrderSchema);
})();