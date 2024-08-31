import styles from "./style.module.css";
// import Slider from "../Slider/Slider";

export default function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My lovely works</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam id, optio dolor officia rem dolorem
          sapiente commodi.
        </p>
        {/* <Slider /> */}
      </div>
    </div>
  );
}
