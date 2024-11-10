import { useState } from "react";
import styles from "./style.module.css";
import Slider from "../Slider/Slider";
import SliderBg from "../SliderBg/SliderBg";

import amazingEvening from "./img/amazing-evening.webp";
import cypressForest from "./img/cypress-forest.webp";
import runnyDay from "./img/runny-day.webp";
import silenceOfSea from "./img/silence-of-sea.webp";

const Works = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slidesContent = [silenceOfSea, runnyDay, cypressForest, amazingEvening];

  return (
    <div className={styles.works}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My lovely works</h2>
        <p className={styles.subtitle}>
          Here are collected the moments that are most valuable to me. Each image is a piece of my life captured in a
          frame.
        </p>
      </div>
      <SliderBg activeIndex={activeIndex} slidesContent={slidesContent} additionStyles={styles.sliderBg}>
        <Slider activeIndex={activeIndex} setActiveIndex={setActiveIndex} slidesContent={slidesContent} />
      </SliderBg>
    </div>
  );
};

export default Works;
