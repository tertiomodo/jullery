import { useState } from "react";
import SliderBg from "@components/SliderBg/SliderBg";
import Slider from "@components/Slider/Slider";

import silenceOfSea from "./img/silence-of-sea.jpg";
import rainyDay from "./img/rainy-day.jpg";
import cypressForest from "./img/cypress-forest.jpg";
import amazingEvening from "./img/amazing-evening.jpg";

import styles from "./style.module.css";

const images = [
  {
    id: 0,
    image: silenceOfSea,
  },
  {
    id: 1,
    image: rainyDay,
  },
  {
    id: 2,
    image: cypressForest,
  },
  {
    id: 3,
    image: amazingEvening,
  },
];

const captions = [
  {
    id: 0,
    caption: "Silence of sea",
  },
  {
    id: 1,
    caption: "Rainy day",
  },
  {
    id: 2,
    caption: "Cypress forest",
  },
  {
    id: 3,
    caption: "Amazing evening",
  },
];

const WorksSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      data-section="worksSlider"
      className={`${styles.worksSlider} sectionAnimation`}
    >
      <SliderBg
        activeIndex={activeIndex}
        images={images}
        additionStyles={styles.sliderBg}
        isBlur
      />
      <div className={styles.sliderWrapper}>
        <Slider
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          images={images}
          additionStyles={styles.slider}
          additionDotsStyles={styles.dots}
        />
        {captions.map(({ id, caption }) => (
          <p
            key={id}
            className={`${styles.caption} ${
              id === activeIndex ? styles.active : ""
            }`}
          >
            {caption}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WorksSlider;
