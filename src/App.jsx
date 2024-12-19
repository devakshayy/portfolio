import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <main className="bg-[#f5f5f7]">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
