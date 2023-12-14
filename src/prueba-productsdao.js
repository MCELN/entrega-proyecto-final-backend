const ProductsDao = require('./DAO/fs/products.dao');

const Products = new ProductsDao();

const createProduct = async () => {

    const response = await Products.create({
        title: 'Product 1',
        description: 'Description 1',
        code: 'ABC123',
        price: 100,
        status: true,
        stock: 10,
        category: 'Category 1',
    })

    return response;
}

const response = createProduct();

setTimeout(() => {

    console.log(response);
}, 1000);