(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        /**Array with info provided by auth0 */
        name:{
            type:String,
            required: true},

         email: {
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
        },
        nickname:{type:String},
        picture:{type:String},
        created_at:{type:String}
    });

    module.exports = mongoose.model('users', UserSchema);
})();