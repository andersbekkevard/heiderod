import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/bilde.jpg" alt="Heiderød Farm fields" className={styles.image} />
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>Welcome to Heiderød Farm</h1>
            <p className={styles.subtitle}>
              Experience the beauty of nature and fresh, organic produce straight from our fields.
            </p>
            <Link to="/about" className={styles.button}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;