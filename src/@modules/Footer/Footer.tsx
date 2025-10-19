import styles from "./style.module.css";

const Footer: React.FC = () => {
  return (
    <footer
      data-section="footer"
      className={`${styles.footer} sectionAnimation`}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Contacts</h2>
            <p className={styles.description}>
              Here is my contact info, so, if you like my works you always can
              follow me
            </p>
            <div className={styles.socials}>
              <a
                className={styles.link}
                href="https://www.instagram.com/1ortodox"
                target="_blank"
              >
                <div className={`${styles.logo} ${styles.instagram}`}></div>
                <p className={styles.socialName}>Instagram</p>
              </a>
              <a
                className={styles.link}
                href="https://t.me/medoedova_crochet"
                target="_blank"
              >
                <div className={`${styles.logo} ${styles.telegram}`}></div>
                <p className={styles.socialName}>Telegram</p>
              </a>
            </div>
          </div>
          <div className={styles.madeByBlock}>
            <a
              className={styles.madeBy}
              href="https://github.com/tertiomodo"
              target="_blank"
            >
              Made with <span className={styles.heart}>❤️</span> by{" "}
              <span className="highlight">tertiomodo</span>
            </a>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Jullery. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
