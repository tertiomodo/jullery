import Slider from "../Slider/Slider";
import styles from "./style.module.css";
import amazingEvening from "./img/amazing-evening.webp";
import cypressForest from "./img/cypress-forest.webp";
import runnyDay from "./img/runny-day.webp";
import silenceOfSea from "./img/silence-of-sea.webp";

export default function Works() {
  const slidesContent = [amazingEvening, cypressForest, runnyDay, silenceOfSea];

  return (
    <div className={styles.works}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My lovely works</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam id, optio dolor officia rem dolorem
          sapiente commodi.
        </p>
        <Slider slidesContent={slidesContent} />
      </div>
    </div>
  );
}
