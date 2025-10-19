import { useState } from "react";
import Header from "@modules/Header/Header";
import Welcome from "@modules/Welcome/Welcome";
import Footer from "@modules/Footer/Footer";
import Works from "@modules/Works/Works";
import About from "@modules/About/About";
import Gallery from "@modules/Gallery/Gallery";
import { useRefresh } from "@hooks/useRefresh";
import { useSectionAnimation } from "@hooks/useSectionAnimation";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [sectionID, setSectionID] = useState<number>(0);
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);

  useRefresh();
  useSectionAnimation({
    menuOpen,
    isMenuClick,
    setIsMenuClick,
    sectionID,
    setSectionID,
  });

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setIsMenuClick={setIsMenuClick}
        setSectionID={setSectionID}
        sectionID={sectionID}
      />
      <main>
        <Welcome />
        <Works />
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default App;
