const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// User Signup (Optional)
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// User Login (Optional)
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });

        if (user) {
            res.json({ message: 'Login successful', user });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
