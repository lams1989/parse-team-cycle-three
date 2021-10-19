(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ClientSchema = new Schema({
        client_id: {
            type: Number,
            required: true,
            unique:true
        },
        client_name: {
            type: String,
            required: true,
            unique:true
        }
       

    });

    module.exports = mongoose.model('clients', ClientSchema);
})();