import Hero from "../components/Hero";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.intro}>
        <div className="container">
          <h2>Hva vi gjør</h2>
          <p>
            Oppdag de rike smakene fra våre lokalt dyrkede produkter og
            håndlagde varer. Fra våre åkrer til ditt bord er vi forpliktet til
            bærekraftig landbruk og fremragende kvalitet.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
