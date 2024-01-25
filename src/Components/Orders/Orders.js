import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const Orders = ({ cart }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <Typography>
              {item.name} - ${item.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Orders;
