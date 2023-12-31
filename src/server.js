const express = require('express');
const router = require('./router');
const MongoConnection = require('./db');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

MongoConnection.getInstance();
router(app);

module.exports = app;