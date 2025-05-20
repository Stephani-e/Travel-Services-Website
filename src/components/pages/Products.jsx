import React, { useState } from 'react';
import './Products.css';
import productsData from '../../Data/ProductsData';

export default function Products() {
  const [buyingId, setBuyingId] = useState(null);

  const handleBuy = (id, name) => {
    setBuyingId(id);
    // Simulate purchase process delay
    setTimeout(() => {
      alert(`You bought ${name}!`);
      setBuyingId(null);
    }, 1200);
  };

  return (
    <div className="products-container">
      <h1 className="products">Our Products</h1>
      <div className="products-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleBuy(product.id, product.name)}
                disabled={buyingId === product.id}
              >
                {buyingId === product.id ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
