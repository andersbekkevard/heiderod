import styles from "./Contact.module.css";
import { getText } from "../utils/textManager";

function Contact() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.imageWrapper}>
          <img
            src={`${baseUrl}bilder2025/ved.jpg`}
            alt={getText("contact.imageAlt")}
            className={styles.image}
          />
        </div>
        <h2>{getText("contact.title")}</h2>
        <p>{getText("contact.description")}</p>
        <p className={styles.info}>
          E-post:{" "}
          <a href={`mailto:${getText("contact.email")}`}>{getText("contact.email")}</a>
        </p>
        <p className={styles.info}>
          Telefon: <a href={`tel:${getText("contact.phone").replace(/\s+/g, '')}`}>{getText("contact.phone")}</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
