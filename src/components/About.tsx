
import React from 'react';
import styles from './About.module.css';

function About() {
	const baseUrl = import.meta.env.BASE_URL;
	return (
		<section id="about" className={styles.about}>
			<div className="container">
				<div className={styles.imageWrapper}>
					<img
						src={`${baseUrl}bilder2025/blomst-2-closeup.jpg`}
						alt="Heiderød kitchen garden"
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h2>About Our Farm</h2>
					<p>
						Heiderød is a family-owned farm dedicated to sustainable agriculture and
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