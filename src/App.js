import './App.css';
import Header from './components/Header';
import MobileNav from './components/mobileNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className='footer'>
          <h1>
            created by mohamed
          </h1>
        </footer>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
