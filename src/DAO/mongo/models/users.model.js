const mongoose = require('mongoose');

const userCollection = 'user';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        index: true,
    },
    age: Number,
    passowrd: String,
    cart: String,
    status: Boolean,
    rol: String,
    products: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
            },
        }]
    },
    verify: String,
    verified: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    LastConnectionDate: Date,
});

userSchema.methods.serialize = function () {
    return {
        _id: this._id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        age: this.age,
        passowrd: this.passowrd,
        cart: this.cart,
        status: this.status,
        rol: this.rol,
        products: this.products,
        verify: this.verify,
        verified: this.verified,
        createdAt: this.createdAt,
        LastConnectionDate: this.LastConnectionDate,
    };
};

userSchema.pre(['find', 'findOne'], function () {
    this.populate({ path: 'products.product', select: 'title description price thumbnail code status category stock' });
})

const Users = mongoose.model(userCollection, userSchema);

module.exports = Users;