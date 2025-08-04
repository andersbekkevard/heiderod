import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { getText } from "../utils/textManager";

interface Photo {
  src: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  photos: Photo[];
}

const Carousel: React.FC<CarouselProps> = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const length = photos.length;

  if (length === 0) {
    return null;
  }

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
        aria-label={getText("carousel.previous")}
      >
        &#10094;
      </button>
      <div className={styles.slideWrapper}>
        <img
          src={photos[current].src}
          alt={photos[current].alt}
          className={styles.image}
        />
        <div className={styles.caption}>{photos[current].description}</div>
      </div>
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label={getText("carousel.next")}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
