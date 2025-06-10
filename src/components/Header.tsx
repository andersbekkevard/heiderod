import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.logo}>Heiderød</div>
				<nav className={styles.nav}>
					<Link to="/">Home</Link>
					<Link to="/our-story">Our Story</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/photos">Photos</Link>
					{/* <Link to="/about">About</Link> */}
					<Link to="/contact">Contact</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;