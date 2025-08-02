import styles from "./PhotosPage.module.css";

const baseUrl = import.meta.env.BASE_URL;
const photos = [
  {
    src: `${baseUrl}bilder2025/blomst-1-closeup.jpg`,
    alt: "blomst 1 nærbilde",
    description: "Levende nærbilde av blomstrende blomster",
  },
  {
    src: `${baseUrl}bilder2025/robert-steingjerdet.jpg`,
    alt: "robert steingjerdet",
    description: "Foto: Jan Robert Løwengreen",
  },
  {
    src: `${baseUrl}bilder2025/eplekart.jpg`,
    alt: "eplekart",
    description: "Kunstnerisk luftbilde av eplehage",
  },
  {
    src: `${baseUrl}bilder2025/kirsebaer-inne.jpg`,
    alt: "kirsebaer inne",
    description: "Fint kirsebær utstilt innendørs",
  },
  {
    src: `${baseUrl}bilder2025/kongle.jpg`,
    alt: "kongle",
    description: "Rustikk furukongle som hviler på tre",
  },
  {
    src: `${baseUrl}bilder2025/laave-vinter.jpg`,
    alt: "laave vinter",
    description: "Fredelig vinterscene med låve",
  },
  {
    src: `${baseUrl}bilder2025/skudd.jpg`,
    alt: "skudd",
    description: "Ferske grønne skudd som stiger opp fra jorden",
  },
  {
    src: `${baseUrl}bilder2025/steingjerde.jpg`,
    alt: "steingjerde",
    description: "Solbelyst steingjerde i beitemarken",
  },
];

import Carousel from "../components/Carousel";

function PhotosPage() {
  return (
    <section className={styles.photos}>
      <div className="container">
        <h2>Bilder</h2>
        <Carousel photos={photos} />
      </div>
    </section>
  );
}

export default PhotosPage;
