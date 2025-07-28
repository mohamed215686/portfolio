import './App.css';
import Header from './components/Header';
import MobileNav from './components/mobileNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkVeil from './DarkVeil';
function App() {
  return (
    <Router>
      <div className="App">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <DarkVeil />
    
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MobileNav />
      </div></div>
    </Router>
  );
}

export default App;
