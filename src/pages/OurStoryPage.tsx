import styles from "./OurStoryPage.module.css";
import { getText } from "../utils/textManager";

const baseUrl = import.meta.env.BASE_URL;

function OurStoryPage() {
  return (
    <section id="our-story" className={styles.story}>
      <div className="container">
        <h2>{getText("ourStory.title")}</h2>
        <div className={styles.block}>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/gaard1.jpg`}
              alt={getText("ourStory.newBeginning.imageAlt")}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h3>{getText("ourStory.newBeginning.title")}</h3>
            <p>
              {getText("ourStory.newBeginning.description")}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.text}>
            <h3>{getText("ourStory.findingFarm.title")}</h3>
            <p>
              {getText("ourStory.findingFarm.description")}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kjoekkenhage-1.jpg`}
              alt={getText("ourStory.findingFarm.imageAlt")}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kjoekkenhage-2.jpg`}
              alt={getText("ourStory.rebuilding.imageAlt")}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h3>{getText("ourStory.rebuilding.title")}</h3>
            <p>
              {getText("ourStory.rebuilding.description")}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.text}>
            <h3>{getText("ourStory.community.title")}</h3>
            <p>
              {getText("ourStory.community.description")}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={`${baseUrl}bilder2025/kirsebaer-ute.jpg`}
              alt={getText("ourStory.community.imageAlt")}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStoryPage;
