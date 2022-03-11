import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <Router>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolios" element={<PortfliosPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
