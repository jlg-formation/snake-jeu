import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/2842446?v=4"
          alt="Jean-Louis Guenego avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg mb-4"
        />
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center">
          Jean-Louis GUENEGO
        </h1>
        <h2 className="text-xl text-gray-600 mb-4 text-center">IT Freelance · JLG Consulting · Torcy (France)</h2>
        <a
          href="http://www.jlg-consulting.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mb-6 hover:text-blue-700"
        >
          www.jlg-consulting.com
        </a>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Compétences</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js, TypeScript, JavaScript</li>
              <li>React, Angular, SSO, NTLM</li>
              <li>Architecture logicielle</li>
              <li>Consulting & Formation</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Projets populaires</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><a href="https://github.com/jlguenego/node-expose-sspi" className="text-blue-500 hover:underline" target="_blank">node-expose-sspi</a></li>
              <li><a href="https://github.com/jlguenego/react-sso-example" className="text-blue-500 hover:underline" target="_blank">react-sso-example</a></li>
              <li><a href="https://github.com/jlguenego/jlg-i18n" className="text-blue-500 hover:underline" target="_blank">jlg-i18n</a></li>
              <li><a href="https://github.com/jlguenego/ntlm-parser" className="text-blue-500 hover:underline" target="_blank">ntlm-parser</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Contact</h3>
            <ul className="text-gray-700">
              <li>Email : <a href="mailto:jlguenego@gmail.com" className="text-blue-500 hover:underline">jlguenego@gmail.com</a></li>
              <li>GitHub : <a href="https://github.com/jlguenego" className="text-blue-500 hover:underline" target="_blank">jlguenego</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Formations</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ingénieur en informatique</li>
              <li>Formateur certifié</li>
              <li>+20 ans d'expérience</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="https://github.com/jlguenego?tab=repositories" className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition" target="_blank">Voir les dépôts GitHub</a>
          <a href="https://github.com/jlguenego?tab=projects" className="bg-purple-500 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition" target="_blank">Projets</a>
        </div>
      </div>
      <footer className="mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Jean-Louis Guenego · JLG Consulting
      </footer>
    </div>
  );
}
