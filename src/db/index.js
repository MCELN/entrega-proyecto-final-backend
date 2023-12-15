const mongoose = require('mongoose');
const { db } = require('../config');

class MongoConnection {
    static #instance;

    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`
            );
            console.log('MongoDB is connected');
        } catch (error) {
            console.error(`${error} The connection to the database could not be established.`);
        };
    };

    static getInstance() {
        if (this.#instance) {
            return this.#instance;
        };

        this.#instance = new MongoConnection();
        return this.#instance;
    };
};

module.exports = MongoConnection;