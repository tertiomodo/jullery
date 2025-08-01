import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Works />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
