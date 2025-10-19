import { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";

interface ChildProps {
  setSectionID: React.Dispatch<React.SetStateAction<number>>;
  setIsMenuClick: React.Dispatch<React.SetStateAction<boolean>>;
  sectionID: number;
}

const Header: React.FC<ChildProps> = ({
  setSectionID,
  setIsMenuClick,
  sectionID,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const burger = useRef<HTMLButtonElement>(null);
  const headerTriggerSections = [
    "gallery0",
    "gallery1",
    "gallery2",
    "gallery3",
    "footer",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const section = sections[sectionID] as HTMLElement;
    const sectionName = section.dataset.section as string;
    const condition =
      section.classList.contains("activeSection") &&
      headerTriggerSections.includes(sectionName) &&
      window.innerWidth < 768;

    if (condition) {
      burger.current?.classList.add(styles.alignLeft);
    } else {
      burger.current?.classList.remove(styles.alignLeft);
    }
  }, [sectionID]);

  function menuHandler() {
    setMenuOpen((prev) => !prev);
  }

  const scrollToSection = (e: React.MouseEvent) => {
    setMenuOpen(false);

    const target = e.target as HTMLElement;
    const sectionIndex = Number(target.dataset.scrollTo) as number;

    setSectionID(sectionIndex);
    setIsMenuClick(true);
  };

  const itemsData = [
    { id: 1, text: "Lovely works" },
    { id: 3, text: "About" },
    { id: 4, text: "Gallery" },
    { id: 9, text: "Contacts" },
  ];

  return (
    <header className={`${styles.header} ${menuOpen ? styles.navActive : ""}`}>
      <div className={styles.wrapper}>
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
        <button ref={burger} onClick={menuHandler} className={styles.burger}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
