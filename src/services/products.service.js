const ProductsDao = require('../DAO/mongo/products.dao');
const ProductsDto = require('../DTO/products.dto');

const Products = new ProductsDao();

const getAll = async () => {
    try {
        const products = await Products.getAll();
        return products;
    } catch (error) {
        throw error;
    };
};

const getById = async (id) => {
    try {
        const product = await Products.getById(id);
        return product;
    } catch (error) {
        throw error;
    };
};

const getOne = async ({ prop }) => {
    try {
        const product = await Products.getOne({ prop });
        return product;
    } catch (error) {
        throw error;
    };
};

const paginate = async (filter, queryOption) => {
    try {
        const products = await Products.paginate(filter, queryOption);
        return products;
    } catch (error) {
        throw error;
    };
};

const create = async (productInfo) => {
    try {
        const { title, description, price, thumbnail, code, status, category, stock, createdBy } = productInfo;

        if (!title || !description || !price || !code || !category || !stock || !createdBy) {
            return 'Faltan datos';
        };

        productInfo.status = status === 'on' ? true : false;
        const newProduct = new ProductsDto(productInfo);
        const exitsCode = await Products.getOne({ code });

        if (!exitsCode) {
            const product = await Products.create(newProduct);
            return product;
        } else {
            return 'fail code';
        };

    } catch (error) {
        throw error;
    };
};

const updateOne = async (id, prouctUpdate) => {
    try {
        const product = await Products.getById(id);
        if (!product) {
            return 'No existe el producto';
        } else {
            const propertiesUp = Object.keys(prouctUpdate);
            const propertiesValid = ['title', 'description', 'price', 'thumbnail', 'code', 'status', 'category', 'stock'];
            const propertiesUpAndValid = propertiesUp.filter(prop => propertiesValid.includes(prop));
            const productUp = {};

            for (const propertiesValid of propertiesUpAndValid) {
                productUp[propertiesValid] = prouctUpdate[propertiesValid];

            }
            const productUpdated = await Products.updateOne(id, productUp);
            return productUpdated;
        }
    } catch (error) {
        throw error;
    };
};

const deleteOne = async (id) => {
    try {
        const product = await Products.getById(id);
        if (!product) {
            return 'No existe el producto';
        } else {
            const productDeleted = await Products.deleteOne(id);
            return productDeleted;
        }
    } catch (error) {
        throw error;
    };
}

module.exports = {
    getAll,
    getById,
    getOne,
    paginate,
    create,
    updateOne,
    deleteOne,
}