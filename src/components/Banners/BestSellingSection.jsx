import React from 'react';
import Product from '../Product/Product';

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '24px',
    color: '#002f5f',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
};

const mockProducts = [
  {
    id: 'whey1',
    image: '/images/50732.png',
    name: 'Whey Protein 1KG - Integralmedica',
    oldPrice: '130,00',
    price: '100,00',
    installments: 'até 3x de R$ 43,33 sem juros',
  },
  {
    id: 'whey2',
    image: '/images/50733.png',
    name: 'Whey Protein 1KG - Integralmedica',
    oldPrice: '130,00',
    price: '100,00',
    installments: 'até 3x de R$ 43,33 sem juros',
  },
  {
    id: 'creatina1',
    image: '/images/50734.png',
    name: 'Whey Protein 1KG - Integralmedica',
    oldPrice: '130,00',
    price: '100,00',
    installments: 'até 3x de R$ 43,33 sem juros',
  },
  {
    id: 'whey-choco',
    image: '/images/50735.png',
    name: 'Whey Protein 1KG - Integralmedica',
    oldPrice: '130,00',
    price: '100,00',
    installments: 'até 3x de R$ 43,33 sem juros',
  },
];

const BestSellingSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mais Vendidos</h2>
      <div style={styles.grid}>
        {mockProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingSection;
