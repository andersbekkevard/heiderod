import React from 'react';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p className={styles.contact}>
					<a href="mailto:info@heiderodfarm.com">info@heiderodfarm.com</a> | <a href="tel:+1234567890">+1 (234) 567-890</a>
				</p>
				<p>© {new Date().getFullYear()} Heiderød. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;