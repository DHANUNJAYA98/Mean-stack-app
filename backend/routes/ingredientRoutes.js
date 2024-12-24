const express = require('express');
const Ingredient = require('../models/ingredientModel');
const router = express.Router();

router.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
