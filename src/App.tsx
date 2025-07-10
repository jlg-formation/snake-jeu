import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Accueil</Link>
        <Link to="/about" style={{ marginRight: 10 }}>À propos</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
