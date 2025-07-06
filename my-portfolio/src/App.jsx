import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
// import GitGraph from './components/GitGraph';
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      {/* <GitGraph/>  NOT WORKING AS OF NOW */}
      <Education />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
