import React from 'react';
import Hero from '../components/Hero';
import styles from './HomePage.module.css';

function HomePage() {
	return (
		<>
			<Hero />
			<section className={styles.intro}>
				<div className="container">
					<h2>What We Do</h2>
					<p>
						Discover the rich flavors of our locally grown produce and handcrafted goods.
						From our fields to your table, we are committed to sustainable farming
						and exceptional quality.
					</p>
				</div>
			</section>
		</>
	);
}

export default HomePage;