import { useState, useEffect } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function clickHandler() {
    setBurgerOpen((prev) => !prev);
  }

  useEffect(() => {
    if (burgerOpen) {
      document.body.classList.add("removeScroll");
    } else {
      document.body.classList.remove("removeScroll");
    }

    return function cleanup() {
      document.body.classList.remove("removeScroll");
    };
  }, [burgerOpen]);

  return (
    <header className={clsx(styles.header, { [styles.navActive]: burgerOpen })}>
      <img className={styles.logo} src="./header-logo.svg" alt="Logo" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <button>Lovely works</button>
        </li>
        <li className={styles.item}>
          <button>Gallery</button>
        </li>
        <li className={styles.item}>
          <button>About</button>
        </li>
        <li className={styles.item}>
          <button>Contacts</button>
        </li>
      </ul>
      <button onClick={clickHandler} className={styles.burger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
    </header>
  );
}
