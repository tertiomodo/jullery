import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function clickHandler() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("removeScroll");
    } else {
      document.body.classList.remove("removeScroll");
    }

    return () => {
      document.body.classList.remove("removeScroll");
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${menuOpen ? styles.navActive : ""}`}>
      <div className={styles.wrapper}>
        <img
          onClick={() => setMenuOpen(false)}
          className={styles.logo}
          src="./logo.svg"
          alt="Logo"
        />
        <ul className={styles.list}>
          <li className={styles.item}>Lovely works</li>
          <li className={styles.item}>Gallery</li>
          <li className={styles.item}>About</li>
          <li className={styles.item}>Contacts</li>
        </ul>
        <button onClick={clickHandler} className={styles.burger}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
