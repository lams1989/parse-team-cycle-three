(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var ProductMiddleware = require('./product.module')().ProductMiddleware;

    router.post('/',
        ProductMiddleware.addProduct,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        ProductMiddleware.getProducts,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:ProductId',
        ProductMiddleware.getProductById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:ProductId',
        ProductMiddleware.modifyProduct,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:productId',
        ProductMiddleware.removeProduct,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();