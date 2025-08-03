import styles from "./style.module.css";

const WorksTitle: React.FC = () => {
  return (
    <section className={styles.worksTitle}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>My lovely works</h2>
          <p className={styles.subtitle}>
            Here are moments that hold the greatest value for me. Each image is
            a small part of my life, captured in a frame.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorksTitle;
