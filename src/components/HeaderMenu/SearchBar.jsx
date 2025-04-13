import React from 'react';
import { InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Box sx={{ backgroundColor: 'white', borderRadius: 25, display: 'flex', alignItems: 'center', px: 2, width: 300 }}>
      <InputBase placeholder="Procurar item" fullWidth />
      <Search sx={{ color: '#002c50' }} />
    </Box>
  );
};

export default SearchBar;
