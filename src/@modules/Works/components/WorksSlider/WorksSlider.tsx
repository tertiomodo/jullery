import { useState } from "react";
import Slider from "@components/Slider/Slider";
import SliderBg from "@components/SliderBg/SliderBg";

import silenceOfSea from "./img/silence-of-sea.jpg";
import runnyDay from "./img/runny-day.jpg";
import cypressForest from "./img/cypress-forest.jpg";
import amazingEvening from "./img/amazing-evening.jpg";

import styles from "./style.module.css";

const WorksSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = [
    {
      id: 0,
      image: silenceOfSea,
      caption: "Silence of sea",
    },
    {
      id: 1,
      image: runnyDay,
      caption: "Runny day",
    },
    {
      id: 2,
      image: cypressForest,
      caption: "Cypress forest",
    },
    {
      id: 3,
      image: amazingEvening,
      caption: "Amazing evening",
    },
  ];

  return (
    <section className={styles.worksSlider}>
      <SliderBg
        activeIndex={activeIndex}
        images={images}
        additionStyles={styles.sliderBg}
      >
        <Slider
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          images={images}
          additionStyles={styles.slider}
          additionCaptionStyles={styles.caption}
          additionDotsStyles={styles.dots}
        />
      </SliderBg>
    </section>
  );
};

export default WorksSlider;
