import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "./assets/css/main.css";
import Skills from "./components/skills";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import ScrollTop from "./components/scrollTop";
import Header from "./components/header";
import HeaderToggle from "./headerToggle";
import ProjectDetails from "./components/projectDetails";
import Footer from "./components/footer";
import ibProjectInfo from "./data/ibProjectInfo.json";
import pwaProjectInfo from "./data/pwaProjectInfo.json";
import scmProjectInfo from "./data/scmProjectInfo.json";
import ScrollToTopWrapper from "./components/scrollToTopWrapper";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (window.GLightbox) window.GLightbox({ selector: ".glightbox" });
    const grid = document.querySelector(".portfolio-container");
    if (window.imagesLoaded && window.Isotope && grid) {
      window.imagesLoaded(grid, () => {
        new window.Isotope(grid, {
          itemSelector: ".portfolio-item",
          layoutMode: "masonry",
        });
      });
    }
    if (window.PureCounter) new window.PureCounter();
  }, []);

  return (
    <Router>
      <Header />
      <HeaderToggle />
      <ScrollToTopWrapper />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route
            path="/ibProject"
            element={<ProjectDetails {...ibProjectInfo} />}
          />
          <Route
            path="/pwaProject"
            element={<ProjectDetails {...pwaProjectInfo} />}
          />
          <Route
            path="/scmProject"
            element={<ProjectDetails {...scmProjectInfo} />}
          />
        </Routes>
        <ScrollTop />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
