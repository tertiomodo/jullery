import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuHandler() {
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

  const scrollToSection = (e: React.MouseEvent) => {
    setMenuOpen(false);

    const target = e.target as HTMLElement;
    const sectionName = target.dataset.scrollTo;
    const targetSection = document.querySelector(
      `[data-section=${sectionName}]`
    ) as HTMLElement;

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const itemsData = [
    { id: "worksTitle", text: "Lovely works" },
    { id: "about", text: "About" },
    { id: "gallery", text: "Gallery" },
    { id: "footer", text: "Contacts" },
  ];

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
          {itemsData.map(({ text, id }) => (
            <li
              key={id}
              className={styles.item}
              onClick={scrollToSection}
              data-scroll-to={id}
            >
              {text}
            </li>
          ))}
        </ul>
        <button onClick={menuHandler} className={styles.burger}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
