import { useState } from "react";
import Slider from "@components/Slider/Slider";
import styles from "./style.module.css";

interface Image {
  id: number;
  image: string;
}

interface Props {
  images: Image[];
  text: string;
}

const GallerySection: React.FC<Props> = ({ images, text }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className={styles.wrapper}>
          <p>{text}</p>
          <Slider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            images={images}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
