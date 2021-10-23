(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductSchema = new Schema({
        id: {
            type: Number,
            required: true,
            unique:true
        },
        description: {
            type: String,
            required: true
        },
        unitprice: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        }

    });

    module.exports = mongoose.model('products', ProductSchema);
})();