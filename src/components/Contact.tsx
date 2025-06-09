import React from 'react';
import styles from './Contact.module.css';

function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<div className="container">
				<div className={styles.imageWrapper}>
					<img
						src="/bilder2025/ved.jpg"
						alt="Wood-chopping"
						className={styles.image}
					/>
				</div>
				<h2>Contact Us</h2>
				<p>Have questions or want to visit? Reach out to us!</p>
				<p className={styles.info}>
					Email: <a href="mailto:info@heiderodfarm.com">info@heiderodfarm.com</a>
				</p>
				<p className={styles.info}>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
			</div>
		</section>
	);
}

export default Contact;