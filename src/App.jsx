import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function Divider() {
  return (
    <div className="section-divider">
      <div className="section-divider-line"></div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="app-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}

export default App;
