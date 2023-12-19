class ProductsDto {

    constructor(product) {
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.thumbnail = product.thumbnail;
        this.code = product.code;
        this.status = product.status || true;
        this.category = product.category;
        this.stock = product.stock;
        this.createdBy = product.createdBy || 'admin';
        this.createdAt = product.createdAt || new Date();
    };
};

module.exports = ProductsDto;