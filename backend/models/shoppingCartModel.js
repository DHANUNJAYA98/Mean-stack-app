const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            pizzaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
            quantity: { type: Number, default: 1 }
        }
    ]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;
