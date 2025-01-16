import "./App.css";
import Header from "./compounds/1-header/Header";
import Hero from "./compounds/2-hero/Hero";
import Education from "./compounds/3-education/Education";
import Skills from "./compounds/4-skills/Skills";
import Main from "./compounds/5-main/Main";
import Services from "./compounds/6-services/Skills";
import Contact from "./compounds/7-contact/Contact";
import Footer from "./compounds/8-footer/Footer";
// @ts-ignore
import { useEffect, useState } from "react";

function App() {
  const [showscrollButton, setShowScrollbuttton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowScrollbuttton(true);
      } else {
        setShowScrollbuttton(false);
      }
    });
  }, []);
  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider hero-style"></div>
      <Education />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      <a href="#up" style={{ all: "unset" }}>
        <button
          style={{ opacity: showscrollButton ? 1 : 0, transition: "1s" }}
          className="icon-keyboard_arrow_up scroll-to-top"
        ></button>
      </a>
    </div>
  );
}

export default App;
