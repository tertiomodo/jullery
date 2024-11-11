import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Slider from "../Slider/Slider";
import SliderBg from "../SliderBg/SliderBg";

import amazingEvening from "./img/amazing-evening.webp";
import cypressForest from "./img/cypress-forest.webp";
import runnyDay from "./img/runny-day.webp";
import silenceOfSea from "./img/silence-of-sea.webp";

const Works = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slidesContent = [silenceOfSea, runnyDay, cypressForest, amazingEvening];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.works}>
      <div className={styles.text}>
        <h2 className={styles.title}>My lovely works</h2>
        <p className={styles.subtitle}>
          Here are collected the moments that are most valuable to me. Each image is a piece of my life captured in a
          frame.
        </p>
      </div>
      {isMobile ? (
        <Slider
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          slidesContent={slidesContent}
          additionStyles={styles.slider}
        />
      ) : (
        <SliderBg activeIndex={activeIndex} slidesContent={slidesContent} additionStyles={styles.sliderBg}>
          <Slider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            slidesContent={slidesContent}
            additionStyles={styles.slider}
          />
        </SliderBg>
      )}
    </div>
  );
};

export default Works;
