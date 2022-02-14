import Skills from './Skills';
import './App.css';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
