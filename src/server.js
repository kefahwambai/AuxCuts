const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Sample route for fetching products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Beef Steak', price: 10.99 },
    { id: 2, name: 'Chicken Breast', price: 7.99 },
    // Add more products as needed
  ];

  res.json(products);
});

// Sample route for placing an order
app.post('/api/orders', (req, res) => {
  const order = req.body; // Assuming the request body contains the order details
  console.log('Received order:', order);

  // Process the order (not implemented in this example)

  res.json({ message: 'Order placed successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
