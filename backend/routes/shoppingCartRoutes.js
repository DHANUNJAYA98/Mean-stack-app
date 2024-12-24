const express = require('express');
const ShoppingCart = require('../models/shoppingCartModel');
const router = express.Router();

// Get shopping cart for a user
router.get('/:userId', async (req, res) => {
    try {
        const cart = await ShoppingCart.findOne({ userId: req.params.userId }).populate('items.pizzaId');
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add item to shopping cart
router.post('/:userId', async (req, res) => {
    try {
        const { pizzaId, quantity } = req.body;
        let cart = await ShoppingCart.findOne({ userId: req.params.userId });

        if (!cart) {
            cart = new ShoppingCart({ userId: req.params.userId, items: [] });
        }

        // Check if item exists, if it does, update the quantity
        const existingItem = cart.items.find(item => item.pizzaId.toString() === pizzaId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ pizzaId, quantity });
        }

        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove item from shopping cart
router.delete('/:userId/:pizzaId', async (req, res) => {
    try {
        const cart = await ShoppingCart.findOne({ userId: req.params.userId });

        if (cart) {
            cart.items = cart.items.filter(item => item.pizzaId.toString() !== req.params.pizzaId);
            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
