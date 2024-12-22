import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  
  const [dark, setDark] = useState(false);

  return (
    <main className="bg-[#f5f5f7] dark:bg-gray-700 ">
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
