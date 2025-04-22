import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; // Estilos personalizados

const Product = ({ id, image, name, oldPrice, price, installments }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produto/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="discount-tag">10% OFF</div>
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="old-price">R$ {oldPrice}</p>
      <p className="installments">{installments}</p>
      <p className="new-price">R$ {price}</p>
    </div>
  );
};

export default Product;
