import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import React from "react";
import themeContext from "./Components/theme";
import { useContext } from "react";
import Experience from "./Components/Experience";

function App() {
  const themeCtx = useContext(themeContext);
  return (
    <React.Fragment>
      <div
        className={`${
          themeCtx.theme ? "bg-slate-100" : "bg-slate-700"
        } App w-screen`}
      >
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
