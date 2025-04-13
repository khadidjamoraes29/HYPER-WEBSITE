import React from 'react';
import './FullScreenImage.css';

const FullScreenImage = ({ src, alt = 'imagem de fundo' }) => {
  return (
    <div className="fullscreen-container">
      <img src= "/hyperbanner.png" alt= "hyperbanner" className="fullscreen-image" />
    </div>
  );
};

export default FullScreenImage;
