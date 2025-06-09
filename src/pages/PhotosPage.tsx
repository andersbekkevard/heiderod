import React from 'react';
import styles from './PhotosPage.module.css';

const photos = [
	{
		src: '/bilder2025/blomst-1-closeup.jpg',
		alt: 'blomst 1 closeup',
		description: 'Vibrant close-up of blooming flowers',
	},
	{
		src: '/bilder2025/eplekart.jpg',
		alt: 'eplekart',
		description: 'Artistic aerial view of apple orchard',
	},
	{
		src: '/bilder2025/kirsebaer-inne.jpg',
		alt: 'kirsebaer inne',
		description: 'Delicate cherries displayed indoors',
	},
	{
		src: '/bilder2025/kongle.jpg',
		alt: 'kongle',
		description: 'Rustic pine cone resting on wood',
	},
	{
		src: '/bilder2025/laave-vinter.jpg',
		alt: 'laave vinter',
		description: 'Peaceful winter scene with a barn',
	},
	{
		src: '/bilder2025/skudd.jpg',
		alt: 'skudd',
		description: 'Fresh green shoots emerging from soil',
	},
	{
		src: '/bilder2025/steingjerde.jpg',
		alt: 'steingjerde',
		description: 'Sunlit stone fence in the pasture',
	},
];

import Carousel from '../components/Carousel';

function PhotosPage() {
	return (
		<section className={styles.photos}>
			<div className="container">
				<h2>Photos</h2>
				<Carousel photos={photos} />
			</div>
		</section>
	);
}

export default PhotosPage;