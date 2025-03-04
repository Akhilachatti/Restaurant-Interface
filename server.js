const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample food data
const foodData = {
  items: [ 
    {
       category: "Pizza",
       name: "Margherita Pizza",
       price: 188.99,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     {
       category: "Pizza",
       name: "Pepperoni Pizza",
       price: 100.99,
       imageUrl: "https://example.com/images/pepperoni-pizza.jpg"
     },
     {
       category: "Cold Drinks",
       name: "Coca-Cola",
       price: 20.99,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     {
       category: "Cold Drinks",
       name: "pepsi",
       price: 20.00,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     
     {
       category: "Rice items",
       name: "Biryani fry piece",
       price: 350.00,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     {
       category: "Rice items",
       name: "Panner",
       price: 250.00,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     {
       category: "Hot Drinks",
       name: "coffee",
       price: 8.99,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     },
     {
       category: "Hot Drinks",
       name: "Tea",
       price: 9.99,
       imageUrl: "https://example.com/images/margherita-pizza.jpg"
     }
  ]
};

// API Route
app.get('/api/food', (req, res) => {
  res.status(200).json(foodData);
});

// 404 Route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
