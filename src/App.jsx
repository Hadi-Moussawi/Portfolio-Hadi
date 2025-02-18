import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CanvasFloating from './components/CanvasFloating';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
