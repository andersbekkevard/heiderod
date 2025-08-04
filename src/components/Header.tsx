import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { getText } from "../utils/textManager";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>{getText("navigation.logo")}</div>
        <nav className={styles.nav}>
          <Link to="/">{getText("navigation.home")}</Link>
          <Link to="/our-story">{getText("navigation.ourStory")}</Link>
          <Link to="/shop">{getText("navigation.shop")}</Link>
          <Link to="/photos">{getText("navigation.photos")}</Link>
          {/* <Link to="/about">Om oss</Link> */}
          <Link to="/contact">{getText("navigation.contact")}</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
