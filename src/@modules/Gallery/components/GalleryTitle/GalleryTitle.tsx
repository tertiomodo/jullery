import styles from "./style.module.css";

const GalleryTitle: React.FC = () => {
  return (
    <section data-section="gallery" className={styles.galleryTitle}>
      <div className={`${styles.sectionWrapper} sectionAnimation`}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              Welcome to my <span className="highlight">gallery</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTitle;
