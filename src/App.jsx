import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
     <>
       <Navbar/>
       <Header/>
       <About/>
       <Experience/>
       <Projects/>
       <Contact/>
     </>
  );
}

export default App;
