(function () {
    'use strict';

    module.exports = {
        addUser: addUser,
        getUsers: getUsers,
        getUserById: getUserById,
        getUserByName: getUserByName,
        getUserByEmail: getUserByEmail,
        getUserByRole: getUserByRole,
        getUserByState: getUserByState,
        modifyUser: modifyUser,
        removeUser: removeUser
    };

    var UserService = require('./user.module')().UserService;

    function addUser(req, res, next) {

        UserService.createUser(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getUsers(req, res, next) {

        UserService.fetchUsers()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getUserById(req, res, next) {

        UserService.fetchUserById(req.params.userId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    
    function getUserByName(req, res, next) {

        UserService.fetchUserByName(req.params.userName)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }
    function getUserByEmail(req, res, next) {

        UserService.fetchUserByEmail(req.params.userEmail)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }
    function getUserByRole(req, res, next) {

        UserService.fetchUserByRole(req.params.userRole)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }
    function getUserByState(req, res, next) {

        UserService.fetchUserByState(req.params.userState)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }
    function modifyUser(req, res, next) {
        UserService.updateUser(req.params.userId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeUser(req, res, next) {

        UserService.deleteUser(req.params.userId)
            .then(success)
            .catch(error);

        function success() {
            req.response = "deleled user";
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
