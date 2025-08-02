import styles from "./Contact.module.css";

function Contact() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.imageWrapper}>
          <img
            src={`${baseUrl}bilder2025/ved.jpg`}
            alt="Vedhogst"
            className={styles.image}
          />
        </div>
        <h2>Kontakt oss</h2>
        <p>Har du spørsmål eller vil besøke oss? Ta kontakt!</p>
        <p className={styles.info}>
          E-post:{" "}
          <a href="mailto:info@heiderodfarm.com">info@heiderodfarm.com</a>
        </p>
        <p className={styles.info}>
          Telefon: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
