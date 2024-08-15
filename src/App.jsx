import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/projects/Project";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

     AOS.init({
       duration: 800,
      //  once: true,
     });
   
  return (
    <>
      <h1 className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        {/* <Project/> */}
        <Contact/>
      </h1>
    </>
  );
}

export default App;
