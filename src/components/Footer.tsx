import styles from "./Footer.module.css";
import { getText } from "../utils/textManager";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.contact}>
          <a href={`mailto:${getText("footer.email")}`}>
            {getText("footer.email")}
          </a>{" "}
          | <a href={`tel:${getText("footer.phone").replace(/\s+/g, '')}`}>{getText("footer.phone")}</a>
        </p>
        <p>
          © {new Date().getFullYear()} {getText("navigation.logo")}. {getText("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
