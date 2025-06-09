import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

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
						<img src={heroImage} alt="Heiderød Farm fields" className={styles.image} />
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