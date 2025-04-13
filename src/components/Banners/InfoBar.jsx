import React from 'react';
import './InfoBar.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InventoryIcon from '@mui/icons-material/Inventory';

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="info-item">
        <LocalShippingIcon fontSize="large" />
        <p>Entrega para toda<br />a RMR</p>
      </div>
      <div className="info-item">
        <AccountBalanceWalletIcon fontSize="large" />
        <p>Toda a loja em<br />até 3x sem juros</p>
      </div>
      <div className="info-item">
        <VerifiedUserIcon fontSize="large" />
        <p>Compre com 100%<br />de segurança</p>
      </div>
      <div className="info-item">
        <InventoryIcon fontSize="large" />
        <p>Todos os produtos<br />à pronta entrega</p>
      </div>
    </div>
  );
};

export default InfoBar;
