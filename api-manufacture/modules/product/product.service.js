const { findOneAndDelete } = require('./product.model');

(function () {
    'use strict';

    module.exports = {
        createProduct: createProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        fetchProductByDescription:fetchProductByDescription,
        updatePartOfProduct:updatePartOfProduct,
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
       
        return ProductModel.find({id:productId})
        .exec();
    }

    function fetchProductByDescription(productDescrip) {
        const a= `/.*${productDescrip}.*/`
      return ProductModel.find({description: a})
        .exec();
      
    
    }

    function updatePartOfProduct(productId, product) {
      return ProductModel.findByIdAndUpdate(productId, product,{new:true})
            .exec();
    }

    function updateProduct(productId, product) {
        return ProductModel.findByIdAndUpdate(productId, product, {new: true})
            .exec();
    }

   /* function deleteProduct(productId) {
        
        return ProductModel
            //.findByIdAndRemove(productId)
            findOneAndDelete({id:productId})
            .exec();
    }*/

    function deleteProduct(productId) {
        ProductModel.findOneAndDelete({id: productId })
        .exec();
    }

})();