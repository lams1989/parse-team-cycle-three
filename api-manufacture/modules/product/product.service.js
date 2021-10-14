(function () {
    'use strict';

    module.exports = {
        createProduct: createProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    };

    var ProductModel = require('./product.module')().ProductModel;

    function createProduct(product) {
        return ProductModel.create(product);
    }

    function fetchProducts() {
        return ProductModel.find({})
            .exec();
    }

    function fetchProductById(productId) {
        return ProductModel.findById(productId)
            .exec();
    }

    function updateProduct(productId, product) {
        return ProductModel
            .findByIdAndUpdate(productId, product, {new: true})
            .exec();
    }

    function deleteProduct(productId) {
        return ProductModel
            .findByIdAndRemove(productId)
            .exec();
    }

})();