const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [String],
    topping: [String]
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
