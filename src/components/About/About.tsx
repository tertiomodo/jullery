import styles from "./style.module.css";
import julia from "./img/julia.webp";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.texts}>
        <p className={styles.text}>
          Hi! My&nbsp;name is&nbsp;Julia, and&nbsp;I decided to&nbsp;create this
          site about one of&nbsp;my&nbsp;favorite hobbies&mdash;photography!
        </p>
        <p className={styles.text}>
          I&rsquo;m not a&nbsp;professional photographer, but&nbsp;I truly love
          this craft.
        </p>
        <p className={styles.text}>
          Every trip or&nbsp;journey&nbsp;I take includes a&nbsp;search for
          interesting shots.
        </p>
        <p className={styles.text}>
          I&nbsp;enjoy finding unusual scenes and angles, and&nbsp;I especially
          love photographing cityscapes and nature.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={julia} alt="Julia" />
      </div>
    </div>
  );
};

export default About;
