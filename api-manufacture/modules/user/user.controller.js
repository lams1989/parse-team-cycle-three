(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var UserMiddleware = require('./user.module')().UserMiddleware;

    router.post('/',
        UserMiddleware.addUser,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        UserMiddleware.getUsers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:id',
        UserMiddleware.getUserById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/n/:userName',
        UserMiddleware.getUserByName,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/e/:userEmail',
        UserMiddleware.getUserByEmail,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.get('/r/:userRole',
        UserMiddleware.getUserByRole,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/s/:userState',
        UserMiddleware.getUserByState,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.patch('/upd/:userId',
        UserMiddleware.modifyUser,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:id',
        UserMiddleware.removeUser,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();