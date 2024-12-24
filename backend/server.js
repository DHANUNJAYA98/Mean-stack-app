const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pizza')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));

// Import Routes
const pizzaRoutes = require('./routes/pizzaRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/pizzas', pizzaRoutes);  // Prefix for pizza-related routes
app.use('/api/ingredients', ingredientRoutes);  // Prefix for ingredient-related routes
app.use('/api/cart', shoppingCartRoutes);  // Prefix for shopping cart routes
app.use('/api/users', userRoutes);  // Prefix for user-related routes

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
