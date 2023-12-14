const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class ProductsDao {
    #path = '';
    #products = [];

    constructor() {
        this.#path = (process.cwd() + '/src/files/products.json');
        try {
            const productsFile = fs.readFileSync(this.#path, 'utf-8');
            this.#products = productsFile ? JSON.parse(productsFile) : [];
        } catch (error) {
            throw error;
        };
    };

    async getAll() {
        try {
            const products = await fs.promises.readFile(this.#path, 'utf-8');
            if (!products) {
                return [];
            };
            return JSON.parse(products);
        } catch (error) {
            throw error;
        };
    };

    async getById(id) {
        try {
            const product = this.#products.find(prod => prod._id === id);
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
            const products = await this.getAll();
            const product = products.find(product => product[prop]);
            if (!product) {
                return null;
            };
            return product;
        } catch (error) {
            throw error;
        };
    };

    async paginate(limit) {
        try {
            const products = limit ? this.#products.slice(0, limit) : this.#products;
            return products;
        } catch (error) {
            throw error;
        };
    };

    async create(productInfo) {
        try {
            productInfo._id = uuidv4();
            this.#products.push(productInfo);
            await fs.promises.writeFile(this.#path, JSON.stringify(this.#products));
            return productInfo;
        } catch (error) {
            throw error;
        };
    };

    async updateOne(id, productUpdate) {
        try {
            const propProduct = Object.keys(productUpdate);
            const index = this.#products.findIndex(product => product._id === id);

            for (const prop of propProduct) {
                this.#products[index][prop] = productUpdate[prop];
            };

            await fs.promises.writeFile(this.#path, JSON.stringify(this.#products));
            const resultProduct = await this.getById(id);
            return resultProduct;
        } catch (error) {
            throw error;
        };
    };

    async deleteOne(id) {
        try {
            const index = this.#products.findIndex(product => product._id === id);
            const deleteProduct = this.#products[index];
            this.#products.splice(index, 1);
            await fs.promises.writeFile(this.#path, JSON.stringify(this.#products));
            return deleteProduct;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductsDao;