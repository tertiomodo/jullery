import styles from "./style.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            It’s my photo <span className="highlight">gallery</span>
          </h1>
          <p className={styles.subtitle}>
            “Photography is a way to see the beauty in the ordinary things and capture it forever.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
