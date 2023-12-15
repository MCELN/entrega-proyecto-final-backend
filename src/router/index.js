const productsController = require('../controllers/products.controller');
const chatController = require('../controllers/chat.controller');

const router = app => {
    app.use('/api/products', productsController);
    app.use('/chat', chatController);
};

module.exports = router;