(function () {
    'use strict';

    module.exports = {
        createUser: createUser,
        fetchUsers: fetchUsers,
        fetchUserById: fetchUserById,
        fetchUserByName: fetchUserByName,
        fetchUserByEmail: fetchUserByEmail,
        fetchUserByRole: fetchUserByRole,
        fetchUserByState: fetchUserByState,
        updateUser: updateUser,
        deleteUser: deleteUser
    };

    var UserModel = require('./user.module')().UserModel;

    function createUser(user) {
        return UserModel.create(user);
    }

    function fetchUsers() {
        return UserModel.find({})
            .exec();
    }

    function fetchUserById(userId) {
        return UserModel.find({idUser:userId})
            .exec();
    }

    function fetchUserByName(userName) {
        const nameContains = new RegExp("^"+ userName);
        console.log("name: ",nameContains);
        return UserModel.find({name:nameContains})
            .exec();
    }
    
    function fetchUserByEmail(userEmail) {
        const emailContains = new RegExp("^"+ userEmail);
        console.log("name: ",userEmail);
        return UserModel.find({email:emailContains})
            .exec();
    }
    function fetchUserByRole(userRole) {
        const roleContains = new RegExp("^"+ userRole);
        console.log("name: ",roleContains);
        return UserModel.find({role:roleContains})
            .exec();
    }

    function fetchUserByState(userState) {
        const statusContains = new RegExp("^"+ userState);
        console.log("state: ",statusContains);
        return UserModel.find({state:statusContains})
            .exec();
    }

    function updateUser(userId, user) {
        return UserModel
            .findByIdAndUpdate(userId, user, {new: true})
            .exec();
    }

    /*function deleteUser(userId) {
        return UserModel
            .findByIdAndRemove(userId)
            .exec();
    }
*/
    function deleteUser(userId) {
        UserModel.findOneAndDelete({idUser: userId}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted  : ", docs);
            }
        });
    }

})();