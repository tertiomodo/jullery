import styles from "./style.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={clsx(styles.header, "wrapper")}>
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
    </header>
  );
}
