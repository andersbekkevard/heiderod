import styles from "./OurStoryPage.module.css";

const baseUrl = import.meta.env.BASE_URL;

function OurStoryPage() {
  return (
    <section id="our-story" className={styles.story}>
      <div className="container">
        <h2>Vår historie</h2>
        <div className={styles.block}>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/gaard1.jpg`}
              alt="Bilde av gården fra steingjerdet"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h3>En ny begynnelse</h3>
            <p>
              Da de vokste opp, drømte familien om et liv nær naturen. Inspirert
              av barndomsminnene satte de ut for å gjøre Heiderød til sitt evige
              hjem.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.text}>
            <h3>Å finne gården</h3>
            <p>
              I 2015 oppdaget de det gamle gårdsbygget innbakt mellom bølgende
              åser. Fasinert av sjarmen og historien visste de at dette var hvor
              deres neste kapittel skulle begynne.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kjoekkenhage-1.jpg`}
              alt="Oppdyrkede åkrer og plantet kjøkkenhage"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kjoekkenhage-2.jpg`}
              alt="Heiderød kjøkkenhage"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h3>Gjenoppbygging og planting</h3>
            <p>
              Med lidenskap og utholdenhet restaurerte de den gamle låven,
              reparerte gårdsbygget og dyrket opp åkrene. Hvert frø som ble
              plantet var et løfte om gårdenes fremtid.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.text}>
            <h3>Velkommen til samfunnet</h3>
            <p>
              I dag blomstrer Heiderød. De ønsker besøkende velkommen til å dele
              i høsten, smake ferske produkter, og bli del av gårdenes pågående
              historie.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kirsebaer-ute.jpg`}
              alt="Samfunnet nyter gårdenes høst"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStoryPage;
