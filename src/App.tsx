import Header from "@modules/Header/Header";
import Welcome from "@modules/Welcome/Welcome";
import Footer from "@modules/Footer/Footer";
import Works from "@modules/Works/Works";
import About from "@modules/About/About";
import Gallery from "@modules/Gallery/Gallery";
import { useScrollAnimation } from "@hooks/useScrollAnimation/useScrollAnimation";

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
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
