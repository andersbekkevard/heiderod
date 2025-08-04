import styles from "./PhotosPage.module.css";
import { getText } from "../utils/textManager";

const baseUrl = import.meta.env.BASE_URL;
const photos = [
  {
    src: `${baseUrl}bilder2025/blomst-1-closeup.jpg`,
    alt: "blomst 1 nærbilde",
    description: getText("photos.descriptions.blomst1"),
  },
  {
    src: `${baseUrl}bilder2025/robert-steingjerdet.jpg`,
    alt: "robert steingjerdet",
    description: getText("photos.descriptions.robert"),
  },
  {
    src: `${baseUrl}bilder2025/eplekart.jpg`,
    alt: "eplekart",
    description: getText("photos.descriptions.eplekart"),
  },
  {
    src: `${baseUrl}bilder2025/kirsebaer-inne.jpg`,
    alt: "kirsebaer inne",
    description: getText("photos.descriptions.kirsebaerInne"),
  },
  {
    src: `${baseUrl}bilder2025/kongle.jpg`,
    alt: "kongle",
    description: getText("photos.descriptions.kongle"),
  },
  {
    src: `${baseUrl}bilder2025/laave-vinter.jpg`,
    alt: "laave vinter",
    description: getText("photos.descriptions.laaveVinter"),
  },
  {
    src: `${baseUrl}bilder2025/skudd.jpg`,
    alt: "skudd",
    description: getText("photos.descriptions.skudd"),
  },
  {
    src: `${baseUrl}bilder2025/steingjerde.jpg`,
    alt: "steingjerde",
    description: getText("photos.descriptions.steingjerde"),
  },
];

import Carousel from "../components/Carousel";

function PhotosPage() {
  return (
    <section className={styles.photos}>
      <div className="container">
        <h2>{getText("photos.title")}</h2>
        <Carousel photos={photos} />
      </div>
    </section>
  );
}

export default PhotosPage;
