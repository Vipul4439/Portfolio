import Topbar from "./Components/TopbarPage/Topbar";
import Intro from "./Components/IntroPage/Intro";
import Contact from "./Components/ContactPage/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/MenuPage/Menu";
import About from "./Components/AboutPage/About";
import Project from "./Components/ProjectPage/Project";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
