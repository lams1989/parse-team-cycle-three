(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        id: {
            type: Number,
            required: true, 
            unique:true
            
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }

    });

    module.exports = mongoose.model('users', UserSchema);
})();