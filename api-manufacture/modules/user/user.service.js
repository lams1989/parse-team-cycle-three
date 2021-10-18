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
        return UserModel.find({ id: userId })
            .exec();
    }

    function fetchUserByName(userName) {
        const nameContains = new RegExp("^" + userName);
        console.log("name: ", nameContains);
        return UserModel.find({ name: nameContains })
            .exec();
    }
    function fetchUserByEmail(userEmail) {
        const emailContains = new RegExp("^" + userEmail);
        console.log("name: ", userEmail);
        return UserModel.find({ email: emailContains })
            .exec();
    }
    function fetchUserByRole(userRole) {
        const roleContains = new RegExp("^" + userRole);
        console.log("name: ", roleContains);
        return UserModel.find({ role: roleContains })
            .exec();
    }

    function fetchUserByState(userState) {
        const statusContains = new RegExp("^" + userState);
        console.log("state: ", statusContains);
        return UserModel.find({ state: statusContains })
            .exec();
    }

    function updateUser(user_Id, user) {
        console.log("userid:", user_Id);
        console.log("user:", user);
        return UserModel.findByIdAndUpdate(user_Id, user, { new: true })
            .exec();
    }

    {/*function deleteUser(id) {
        return UserModel
            .findOneAndDelete(id)
            .exec();
    }*/}
    
    function deleteUser(user_Id) {
        return UserModel.findByIdAndRemove(user_Id)
            .exec();
    }

})();