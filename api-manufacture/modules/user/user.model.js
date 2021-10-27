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
        nickname:String,
        picture:String,
        created_at:String
    });

    module.exports = mongoose.model('users', UserSchema);
})();