import React from 'react';
import { IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const CartButton = () => {
  return (
    <IconButton sx={{ color: 'white' }}>
      <ShoppingCart />
    </IconButton>
  );
};

export default CartButton;
