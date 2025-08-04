import Hero from "../components/Hero";
import styles from "./HomePage.module.css";
import { getText } from "../utils/textManager";

function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.intro}>
        <div className="container">
          <h2>{getText("homepage.intro.title")}</h2>
          <p>
            {getText("homepage.intro.description")}
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
