import styles from "./About.module.css";
import { getText } from "../utils/textManager";

function About() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.imageWrapper}>
          <img
            src={`${baseUrl}bilder2025/blomst-2-closeup.jpg`}
            alt={getText("about.imageAlt")}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2>{getText("about.title")}</h2>
          <p>
            {getText("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
