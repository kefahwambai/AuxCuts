import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, Button } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      // Fetch products from the backend
      fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);
  
    const addToCart = product => {
      setCart([...cart, product]);
    };
  
    return (
      <Container maxWidth="md" className="App">
    
        <Typography variant="h6" gutterBottom>
          Products
        </Typography>
        <List>
          {products.map(product => (
            <ListItem key={product.id}>
              <Typography>
                {product.name} - ${product.price}{' '}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Typography>
            </ListItem>
          ))}
        </List>
{/*   
        <Typography variant="h6" gutterBottom>
          Shopping Cart
        </Typography> */}
        <List>
          {cart.map(item => (
            <ListItem key={item.id}>
              <Typography>
                {item.name} - ${item.price}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
export default ProductList;
