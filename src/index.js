const app = require('./server');
const { port } = require('./config');
const realTimeServer = require('./real-time-server');

const httpServer = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

realTimeServer(httpServer);