export default function Git() {
  return (
    <div>
      <h2>Git</h2>
      <h3>Synthèse des commandes Git pour les workflows collaboratifs</h3>
      <ul>
        <li><b>Fork & Pull Request</b> :
          <ul>
            <li>Sur Github, forker le repo : <code>Fork</code> sur l'interface web</li>
            <li>Cloner votre fork : <code>git clone https://github.com/votre-utilisateur/nom-du-repo.git</code></li>
            <li>Créer une branche : <code>git checkout -b ma-feature</code></li>
            <li>Commiter vos changements : <code>git add .</code> puis <code>git commit -m "Ajout de la feature"</code></li>
            <li>Pousser la branche : <code>git push origin ma-feature</code></li>
            <li>Créer une Pull Request sur Github</li>
          </ul>
        </li>
        <li><b>Rebase uniquement</b> :
          <ul>
            <li>Mettre à jour la branche locale : <code>git fetch upstream</code></li>
            <li>Rebaser sur la branche principale : <code>git rebase upstream/main</code></li>
            <li>Résoudre les conflits si besoin, puis <code>git rebase --continue</code></li>
            <li>Pousser avec force si nécessaire : <code>git push --force-with-lease</code></li>
          </ul>
        </li>
        <li><b>Squash des commits</b> :
          <ul>
            <li>Squasher avant merge : <code>git rebase -i upstream/main</code> puis <code>squash</code> ou <code>fixup</code> dans l'éditeur</li>
            <li>Sur Github, choisir "Squash and merge" lors de la fusion de la PR</li>
          </ul>
        </li>
        <li><b>Repos distants sur Github</b> :
          <ul>
            <li>Ajouter le remote principal : <code>git remote add upstream https://github.com/organisation/nom-du-repo.git</code></li>
            <li>Vérifier les remotes : <code>git remote -v</code></li>
          </ul>
        </li>
        <li><b>Utilisation de Github CLI (gh)</b> :
          <ul>
            <li>Cloner un repo : <code>gh repo clone organisation/nom-du-repo</code></li>
            <li>Créer une PR : <code>gh pr create --fill</code></li>
            <li>Lister les PR : <code>gh pr list</code></li>
            <li>Voir le detail d'une PR : <code>gh pr view NN</code></li>
            <li>Tester la PR : <code>gh pr checkout NN</code></li>
            <li>Checker l'état : <code>gh pr status</code></li>
            <li>Fusionner une PR : <code>gh pr merge NN</code></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
