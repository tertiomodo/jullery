import julia from "./img/julia.jpg";
import styles from "./style.module.css";

const About: React.FC = () => {
  return (
    <section
      data-section="about"
      className={`${styles.about} sectionAnimation`}
    >
      <div className="container">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <p className={styles.text}>
              Hi! My name is Julia, and I decided to create this site about one
              of my favorite hobbies &mdash; photography!
            </p>
            <p className={styles.text}>
              I&rsquo;m not a professional photographer, but I truly love this
              craft.
            </p>
            <p className={styles.text}>
              Every trip or journey I take includes a search for interesting
              shots.
            </p>
            <p className={styles.text}>
              I enjoy finding unusual scenes and angles, and I especially love
              photographing cityscapes and nature.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={julia}
              alt="Julia"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
