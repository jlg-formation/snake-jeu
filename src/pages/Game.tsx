import { Link } from 'react-router-dom';

const logoUrl = "https://cdn-icons-png.flaticon.com/512/6945/6945949.png";

export default function Game() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center'
    }}>
      <img
        src={logoUrl}
        alt="Logo Snake"
        style={{ width: 120, height: 120, marginBottom: 24 }}
      />
      <h1 style={{ fontFamily: '"Press Start 2P", monospace', marginBottom: 16 }}>Snake</h1>
      <p style={{ maxWidth: 400, marginBottom: 32, fontSize: 18 }}>
        Snake est un jeu d'arcade classique où vous contrôlez un serpent qui grandit à chaque fois qu'il mange une pomme. 
        Évitez de heurter les murs ou votre propre corps pour continuer à jouer et battre votre meilleur score !
      </p>
      <Link
        to="/play"
        style={{
          padding: '12px 36px',
          borderRadius: 4,
          background: '#198754', // vert foncé Bootstrap
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 18,
          border: 'none',
          boxShadow: '0 2px 4px rgba(25,135,84,0.15)',
          letterSpacing: 1,
          transition: 'background 0.15s, color 0.15s',
          cursor: 'pointer'
        }}
      >
        Jouer
      </Link>
    </div>
  );
}