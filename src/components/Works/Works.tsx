import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Slider from "../Slider/Slider";
import SliderBg from "../SliderBg/SliderBg";

import silenceOfSea from "./img/silence-of-sea.webp";
import runnyDay from "./img/runny-day.webp";
import cypressForest from "./img/cypress-forest.webp";
import amazingEvening from "./img/amazing-evening.webp";

const Works = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const slidesContent = [silenceOfSea, runnyDay, cypressForest, amazingEvening];
  const images = [styles.slide0, styles.slide1, styles.slide2, styles.slide3];
  const caption = [
    { text: "Silence of sea", position: styles.caption },
    { text: "Runny day", position: styles.caption },
    { text: "Cypress forest", position: styles.caption },
    { text: "Amazing evening", position: styles.caption },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
          Here are moments that hold the greatest value for&nbsp;me. Each image is&nbsp;a&nbsp;small part
          of&nbsp;my&nbsp;life, captured in&nbsp;a&nbsp;frame.
        </p>
      </div>

      {isMobile ? (
        <Slider
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          images={images}
          caption={caption}
          additionStyles={styles.slider}
        />
      ) : (
        <SliderBg activeIndex={activeIndex} slidesContent={slidesContent} additionStyles={styles.sliderBg}>
          <Slider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            images={images}
            caption={caption}
            additionStyles={styles.slider}
          />
        </SliderBg>
      )}
    </div>
  );
};

export default Works;
