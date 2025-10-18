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
  const [scrollID, setScrollID] = useState<string>("");
  const header = useRef<HTMLElement>(null);
  const hideHeaderSections = ["gallery0", "gallery1", "gallery2", "gallery3"];

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((s, index) => {
      const section = s as HTMLElement;
      const sectionName = section.dataset.section as string;

      if (sectionName === scrollID) {
        setSectionID(index);
      }
    });
  }, [scrollID]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const section = sections[sectionID] as HTMLElement;
    const sectionName = section.dataset.section as string;
    const condition =
      section.classList.contains("activeSection") &&
      hideHeaderSections.includes(sectionName) &&
      window.innerWidth < 768;

    if (condition) {
      header.current?.classList.add(styles.hide);
    } else {
      header.current?.classList.remove(styles.hide);
    }
  }, [sectionID]);

  function menuHandler() {
    setMenuOpen((prev) => !prev);
  }

  const scrollToSection = (e: React.MouseEvent) => {
    setMenuOpen(false);

    const target = e.target as HTMLElement;
    const scrollDataID = target.dataset.scrollTo as string;

    setScrollID(scrollDataID);
    setIsMenuClick(true);
  };

  const itemsData = [
    { id: "worksTitle", text: "Lovely works" },
    { id: "about", text: "About" },
    { id: "galleryTitle", text: "Gallery" },
    { id: "footer", text: "Contacts" },
  ];

  return (
    <header
      ref={header}
      className={`${styles.header} ${menuOpen ? styles.navActive : ""}`}
    >
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
