import Slider from "../Slider/Slider";
import styles from "./style.module.css";

export default function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My lovely works</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam id, optio dolor officia rem dolorem
          sapiente commodi.
        </p>
        <Slider
          slides={[
            <div className={styles.slideCard}>1</div>,
            <div className={styles.slideCard}>2</div>,
            <div className={styles.slideCard}>3</div>,
            <div className={styles.slideCard}>4</div>,
          ]}
        />
      </div>
    </div>
  );
}
