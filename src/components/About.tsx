import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2>About Our Farm</h2>
          <p>
            Heiderød Farm is a family-owned farm dedicated to sustainable agriculture and
            fresh, organic produce. Nestled in the heart of the countryside, we offer a variety
            of seasonal fruits, vegetables, and artisanal products directly from our fields
            to your table.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;