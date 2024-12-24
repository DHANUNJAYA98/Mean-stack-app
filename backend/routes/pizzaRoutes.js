const express = require('express');
const Pizza = require('../models/pizzaModel');
const router = express.Router();

router.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
