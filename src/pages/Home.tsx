
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-100 to-pink-50 flex flex-col items-center py-10 px-4 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-3xl w-full flex flex-col items-center border border-primary-100 animate-slide-in">
        <img
          src="https://avatars.githubusercontent.com/u/2842446?v=4"
          alt="Jean-Louis Guenego avatar"
          className="w-32 h-32 rounded-full border-4 border-primary-400 shadow-xl mb-6 hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-500 to-pink-400 mb-2 text-center drop-shadow-lg">
          Jean-Louis GUENEGO
        </h1>
        <h2 className="text-xl text-gray-700 mb-6 text-center font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
          IT Freelance · JLG Consulting · Torcy (France)
        </h2>
        <a
          href="http://www.jlg-consulting.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 underline mb-8 hover:text-purple-600 text-lg font-semibold transition-colors"
        >
          www.jlg-consulting.com
        </a>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-primary-50/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold text-primary-600 mb-3">Compétences</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Node.js, TypeScript, JavaScript</li>
              <li>React, Angular, SSO, NTLM</li>
              <li>Architecture logicielle</li>
              <li>Consulting & Formation</li>
            </ul>
          </div>
          <div className="bg-purple-50/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-bold text-purple-600 mb-3">Projets populaires</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><a href="https://github.com/jlguenego/node-expose-sspi" className="text-primary-500 hover:text-primary-700 transition-colors" target="_blank">node-expose-sspi</a></li>
              <li><a href="https://github.com/jlguenego/react-sso-example" className="text-primary-500 hover:text-primary-700 transition-colors" target="_blank">react-sso-example</a></li>
              <li><a href="https://github.com/jlguenego/jlg-i18n" className="text-primary-500 hover:text-primary-700 transition-colors" target="_blank">jlg-i18n</a></li>
              <li><a href="https://github.com/jlguenego/ntlm-parser" className="text-primary-500 hover:text-primary-700 transition-colors" target="_blank">ntlm-parser</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-pink-50/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-bold text-pink-500 mb-3">Contact</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Email : <a href="mailto:jlguenego@gmail.com" className="text-primary-500 hover:text-primary-700 transition-colors">jlguenego@gmail.com</a></li>
              <li>GitHub : <a href="https://github.com/jlguenego" className="text-primary-500 hover:text-primary-700 transition-colors" target="_blank">jlguenego</a></li>
            </ul>
          </div>
          <div className="bg-primary-50/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-bold text-primary-500 mb-3">Formations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Ingénieur en informatique</li>
              <li>Formateur certifié</li>
              <li>+20 ans d'expérience</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-6 animate-slide-in" style={{ animationDelay: '0.7s' }}>
          <a 
            href="https://github.com/jlguenego?tab=repositories" 
            className="bg-primary-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all duration-300 font-semibold" 
            target="_blank"
          >
            Voir les dépôts GitHub
          </a>
          <a 
            href="https://github.com/jlguenego?tab=projects" 
            className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-purple-600 transition-all duration-300 font-semibold" 
            target="_blank"
          >
            Projets
          </a>
        </div>
      </div>
      <footer className="mt-10 text-gray-500 text-sm text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
        &copy; {new Date().getFullYear()} Jean-Louis Guenego · JLG Consulting
      </footer>
    </div>
  );
}
