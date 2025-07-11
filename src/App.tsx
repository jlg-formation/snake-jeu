import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Game from './pages/Game';
import Play from './pages/Play';
import Git from './pages/Git';
import './App.css';
import React, { useState } from 'react';

const bootstrapButtonStyle: React.CSSProperties = {
  marginRight: 20,
  padding: '10px 28px',
  borderRadius: 4,
  background: '#0d6efd',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500,
  fontFamily: 'inherit',
  fontSize: 16,
  border: '1.5px solid #0d6efd',
  boxShadow: '0 2px 4px rgba(13,110,253,0.08)',
  letterSpacing: 1,
  textTransform: 'none',
  transition: 'background 0.15s, color 0.15s',
  cursor: 'pointer',
  outline: 'none',
  position: 'relative',
  userSelect: 'none'
};

const bootstrapButtonHoverStyle: React.CSSProperties = {
  background: '#0b5ed7',
  borderColor: '#0a58ca'
};

function BootstrapNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      style={hover ? { ...bootstrapButtonStyle, ...bootstrapButtonHoverStyle } : bootstrapButtonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <Router>
      <nav
        style={{
          marginBottom: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#222',
          zIndex: 1000,
          padding: 18,
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
        }}
      >
        <BootstrapNavLink to="/">Accueil</BootstrapNavLink>
        <BootstrapNavLink to="/game">Game</BootstrapNavLink>
        <BootstrapNavLink to="/about">À propos</BootstrapNavLink>
        <BootstrapNavLink to="/contacts">Contacts</BootstrapNavLink>
        <BootstrapNavLink to="/git">Git</BootstrapNavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/git" element={<Git />} />
      </Routes>
</Router>
  );
}

export default App;
