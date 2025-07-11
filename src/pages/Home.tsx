export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full">
        <img src="/vite.svg" alt="Snake Logo" className="w-24 h-24 mb-6 animate-bounce" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 drop-shadow-lg">Snake Game</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Bienvenue sur le jeu du serpent !<br/>Essayez d'obtenir le meilleur score possible en contrôlant le serpent avec les flèches du clavier.</p>
        <a href="#" className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform font-semibold">Jouer maintenant</a>
      </div>
    </div>
  );
}
