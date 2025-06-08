import React from 'react';
import styles from './ShopPage.module.css';

const products = [
  { id: 'eggs', name: 'Eggs' },
  { id: 'rhubarb', name: 'Rhubarb' },
  { id: 'apples', name: 'Apples' },
  { id: 'potatoes', name: 'Potatoes' },
];

function ShopPage() {
  return (
    <section className={styles.shop}>
      <div className="container">
        <h2>Shop Our Products</h2>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;