const productsController = require('../controllers/products.controller');

const router = app => {
    app.use('/api/products', productsController);
};

module.exports = router;