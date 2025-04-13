import React from 'react';
import {
  Drawer, Box, Typography, Accordion, AccordionSummary,
  AccordionDetails, List, ListItemButton, ListItemText
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DrawerMenu = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    toggleDrawer(false)(); // Fecha o menu
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6" gutterBottom>Categorias</Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Vitaminas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItemButton onClick={() => handleNavigate('/vitaminas/c')}>
                <ListItemText primary="Vitamina C" />
              </ListItemButton>
              <ListItemButton onClick={() => handleNavigate('/vitaminas/multi')}>
                <ListItemText primary="Multivitamínico" />
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Hipercalóricos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItemButton onClick={() => handleNavigate('/hipercaloricos/massa')}>
                <ListItemText primary="Ganho de Massa" />
              </ListItemButton>
              <ListItemButton onClick={() => handleNavigate('/hipercaloricos/reposicao')}>
                <ListItemText primary="Reposição" />
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Roupas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItemButton onClick={() => handleNavigate('/roupas/masculino')}>
                <ListItemText primary="Masculino" />
              </ListItemButton>
              <ListItemButton onClick={() => handleNavigate('/roupas/feminino')}>
                <ListItemText primary="Feminino" />
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
