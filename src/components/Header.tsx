import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>Heiderød</div>
        <nav className={styles.nav}>
          <Link to="/">Hjem</Link>
          <Link to="/our-story">Vår historie</Link>
          <Link to="/shop">Butikk</Link>
          <Link to="/photos">Bilder</Link>
          {/* <Link to="/about">Om oss</Link> */}
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
