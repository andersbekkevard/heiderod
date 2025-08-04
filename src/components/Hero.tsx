import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { getText } from "../utils/textManager";

function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  const images = [
    `${baseUrl}bilder2025/gaard-luft-1.jpg`,
    `${baseUrl}bilder2025/gaard-luft-2.jpg`,
    `${baseUrl}bilder2025/gaard-luft-3.jpg`,
    `${baseUrl}bilder2025/gaard1.jpg`,
    `${baseUrl}bilder2025/robert-steingjerdet.jpg`,
  ];
  const heroImage = images[Math.floor(Math.random() * images.length)];
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt={getText("hero.imageAlt")}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{getText("hero.title")}</h1>
            <p className={styles.subtitle}>
              {getText("hero.subtitle")}
            </p>
            <Link to="/our-story" className={styles.button}>
              {getText("hero.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
