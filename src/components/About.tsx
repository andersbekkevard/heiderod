import styles from "./About.module.css";

function About() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.imageWrapper}>
          <img
            src={`${baseUrl}bilder2025/blomst-2-closeup.jpg`}
            alt="Heiderød kjøkkenhage"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2>Om vår gård</h2>
          <p>
            Heiderød er en familieeid gård dedikert til bærekraftig landbruk og
            ferske, økologiske produkter. Innbakt i hjertet av landsbygda tilbyr
            vi et mangfold av sesongbaserte frukter, grønnsaker og håndlagde
            produkter direkte fra våre åkrer til ditt bord.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
