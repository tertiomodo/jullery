import styles from "./style.module.css";

const GalleryTitle: React.FC = () => {
  return (
    <section className={styles.galleryTitle}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Welcome to my <span className="highlight">gallery</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GalleryTitle;
