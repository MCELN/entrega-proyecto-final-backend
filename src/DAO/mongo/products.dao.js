const Products = require('./models/products.model');
const { isValidObjectId } = require('mongoose');

class ProductsDao {

    async getAll() {
        try {
            const products = await Products.find();
            return products;
        } catch (error) {
            throw error;
        };
    };

    async getById(id) {
        try {
            if (!isValidObjectId(id)) {
                return null;
            };
            const product = await Products.findById(id);
            if (!product) {
                return null;
            };
            return product;
        } catch (error) {
            throw error;
        };
    };

    async getOne(prop) {
        try {
            const product = await Products.findOne(prop);
            return product;
        } catch (error) {
            throw error;
        };
    };

    async paginate(filter, queryOption) {
        try {
            const products = await Products.paginate(filter, queryOption);
            return products;
        } catch (error) {
            throw error;
        };
    };

    async create(productInfo) {
        try {
            const newProduct = await Products.create(productInfo);
            return newProduct;
        } catch (error) {
            throw error;
        };
    };

    async updateOne(id, productUpdate) {
        try {
            if (!isValidObjectId(id)) {
                return null;
            }
            const product = await Products.findByIdAndUpdate(id, productUpdate);
            return product;
        } catch (error) {
            throw error;
        };
    };

    async deleteOne(id) {
        try {
            if (!isValidObjectId(id)) {
                return null;
            }
            const product = await Products.findByIdAndDelete(id);
            return product;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductsDao;