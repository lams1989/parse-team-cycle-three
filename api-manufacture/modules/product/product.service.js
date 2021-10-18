const productModel = require('./product.model');
const { findOneAndDelete } = require('./product.model');

(function () {
    'use strict';

    module.exports = {
        createProduct: createProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        fetchProductByDescription: fetchProductByDescription,
        updatePartOfProduct: updatePartOfProduct,
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
        return ProductModel.find({ id: productId })
            .exec();
    }

    function fetchProductByDescription(productDescrip) {
        //const product= `/.*${productDescrip}.*/`
        //const roleContains = new RegExp(`/.*${productDescrip}.*/`);
        //const descripToSearch= `/.*${productDescrip}.*/`;
        
        const descripToSearch = new RegExp("^" + productDescrip.toLowerCase());
        console.log("desc: ", descripToSearch);
        return ProductModel.find({ description: descripToSearch })
            .exec();
        }

 
    function updatePartOfProduct(product_Id, product) {
        console.log("productid:", product_Id);
        console.log("product:", product);
        return ProductModel.findByIdAndUpdate(product_Id, product, { new: true })
            .exec();
    }

    function updateProduct(product_Id, product) {
        return ProductModel.findByIdAndUpdate(product_Id, product, { new: true })
            .exec();
    }

    /* function deleteProduct(productId) {
         
         return ProductModel
             //.findByIdAndRemove(productId)
             findOneAndDelete({id:productId})
             .exec();
     }*/

    function deleteProduct(product_Id) {
        return ProductModel.findByIdAndRemove(product_Id)
            .exec();
    }

})();