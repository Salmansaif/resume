import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Experiences from './Experiences';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
