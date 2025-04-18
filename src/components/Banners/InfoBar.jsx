import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import InventoryIcon from '@mui/icons-material/Inventory';

const InfoBar = () => {
  const styles = {
    infoBar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#002c50',
      color: 'white',
      padding: '20px',
      flexWrap: 'wrap',
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '180px',
    },
    paragraph: {
      marginTop: '8px',
      fontSize: '1rem',
      lineHeight: '1.4',
    },
  };

  return (
    <div style={styles.infoBar}>
      <div style={styles.infoItem}>
        <LocalShippingIcon fontSize="large" />
        <p style={styles.paragraph}>
          Entrega para toda<br />a RMR
        </p>
      </div>
      <div style={styles.infoItem}>
        <AccountBalanceWalletIcon fontSize="large" />
        <p style={styles.paragraph}>
          Toda a loja em<br />até 3x sem juros
        </p>
      </div>
      <div style={styles.infoItem}>
        <VerifiedUserIcon fontSize="large" />
        <p style={styles.paragraph}>
          Compre com 100%<br />de segurança
        </p>
      </div>
      <div style={styles.infoItem}>
        <InventoryIcon fontSize="large" />
        <p style={styles.paragraph}>
          Todos os produtos<br />à pronta entrega
        </p>
      </div>
    </div>
  );
};

export default InfoBar;
