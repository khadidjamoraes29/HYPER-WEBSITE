import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';
import CartButton from './CartButton';
import UserProfileButton from './UserProfileButton';
import DrawerMenu from './DrawerMenu';

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#d3d3d3' : '#ffffff',
    textDecoration: 'none',
    marginRight: '20px',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#002c50' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Esquerda: menu + logo + busca */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
            <img src="/hyperlogo.png" alt="logo" style={{ height: 40, marginLeft: 10, marginRight: 10 }} />
            <SearchBar />
          </Box>

          {/* Direita: navlinks + ícones */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>
            <NavLink to="/sobre" style={navLinkStyle}>Sobre Nós</NavLink>
            <NavLink to="/suporte" style={navLinkStyle}>Suporte</NavLink>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CartButton />
              <UserProfileButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default HeaderMenu;
