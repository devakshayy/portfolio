import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ScrollTop from "./components/ScrollTop";

function App() {

  const [dark, setDark] = useState(false);

  return (
    <main className="bg-[#f5f5f7] dark:bg-gray-700 ">
      <Navbar dark={dark} setDark={setDark} />
      <Header dark={dark} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
