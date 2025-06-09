import React from 'react';
import styles from './OurStoryPage.module.css';


const baseUrl = import.meta.env.BASE_URL;

function OurStoryPage() {
	return (
		<section id="our-story" className={styles.story}>
			<div className="container">
				<h2>Our Story</h2>
				<div className={styles.block}>
					<div className={styles.imageWrapper}>
						<img
							src={`${baseUrl}bilder2025/gaard1.jpg`}
							alt="Photo of the farm from the stone-fence"
							className={styles.image}
						/>
					</div>
					<div className={styles.text}>
						<h3>A New Beginning</h3>
						<p>
							Growing up, the family dreamed of a life close to nature. Inspired by their childhood memories,
							they set out to make Heiderød their forever home.
						</p>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.text}>
						<h3>Finding the Farm</h3>
						<p>
							In 2015, they discovered the old farmhouse nestled among rolling hills. Captivated by its charm
							and history, they knew this was where their next chapter would begin.
						</p>
					</div>
					<div className={styles.imageWrapper}>
						<img
							src={`${baseUrl}bilder2025/kjoekkenhage-1.jpg`}
							alt="Tilled fields and planted kitchen garden"
							className={styles.image}
						/>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.imageWrapper}>
						<img
							src={`${baseUrl}bilder2025/kjoekkenhage-2.jpg`}
							alt="Heiderød kitchen garden"
							className={styles.image}
						/>
					</div>
					<div className={styles.text}>
						<h3>Rebuilding and Planting</h3>
						<p>
							With passion and perseverance, they restored the old barn, repaired the farmhouse, and tilled
							the fields. Every seed planted was a promise of the farm's future.
						</p>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.text}>
						<h3>Welcoming the Community</h3>
						<p>
							Today, Heiderød thrives. They welcome visitors to share in their harvest, taste fresh produce,
							and become part of the farm's ongoing story.
						</p>
					</div>
					<div className={styles.imageWrapper}>
						<img
							src={`${baseUrl}bilder2025/kirsebaer-ute.jpg`}
							alt="Community enjoying the farm's harvest"
							className={styles.image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurStoryPage;