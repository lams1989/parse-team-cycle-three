(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        idUser:{
            type:Number,
            required:true
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
            type: String,
            required: true
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