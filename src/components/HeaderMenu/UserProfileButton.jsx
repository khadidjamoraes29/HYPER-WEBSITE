import React from 'react';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const UserProfileButton = () => {
  return (
    <IconButton sx={{ color: 'white' }}>
      <AccountCircle />
    </IconButton>
  );
};

export default UserProfileButton;
