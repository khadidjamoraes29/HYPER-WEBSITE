import React from 'react';

const FullScreenImage = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <img src="/hyperbanner.png" alt="imagem de fundo" style={styles.image} />
    </div>
  );
};

export default FullScreenImage;
