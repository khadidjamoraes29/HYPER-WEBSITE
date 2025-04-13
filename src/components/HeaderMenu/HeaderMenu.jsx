import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import SearchBar from './SearchBar';
import CartButton from './CartButton';
import UserProfileButton from './UserProfileButton';
import DrawerMenu from './DrawerMenu';

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#002c50' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
            <img src="/logo192.png" alt="logo" style={{ height: 40, marginLeft: 10 }} />
          </Box>

          <SearchBar />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CartButton />
            <UserProfileButton />
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default HeaderMenu;
