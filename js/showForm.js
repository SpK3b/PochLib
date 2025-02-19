// Affichage du formulaire de recherche
function showForm() {
  // Ne pas recréer le formulaire s'il existe déjà
  if (document.getElementById('searchForm')) return;

  const form = document.createElement('form');
  form.id = 'searchForm';
  form.innerHTML = `
      <label for="title">Titre du livre</label>
      <input type="text" id="title" name="title" placeholder="Entrez un titre" required />
      
      <label for="author">Auteur</label>
      <input type="text" id="author" name="author" placeholder="Entrez un auteur" required />
      
      <div id="formButton">
          <button type="submit" id="searchButton">Rechercher</button>
          <button type="button" id="cancelButton">Annuler</button>
      </div>
  `;

  // Insertion du formulaire après le bouton "Ajouter un livre"
  if (typeof addButton !== "undefined" && addButton) {
    addButton.insertAdjacentElement('afterend', form);
  } else {
    console.error("Erreur : addButton introuvable.");
  }

  // Gestion du bouton "Annuler"
  document.getElementById('cancelButton').addEventListener('click', () => {
    // Supprime le formulaire
    form.remove();

    // Supprime uniquement le conteneur des résultats de recherche
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
      resultsContainer.innerHTML = "";
    }

    // Réaffiche le bouton "Ajouter un livre"
    if (typeof addButton !== "undefined" && addButton) {
      addButton.style.display = "inline";
    }
  });

  // Gestion du bouton "Rechercher"
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();

    // Vérifier qu'au moins une lettre ou un chiffre est saisi dans chaque champ
    if (!/[a-zA-Z0-9]/.test(title) || !/[a-zA-Z0-9]/.test(author)) {
      if (typeof showToast === "function") {
        showToast("Veuillez saisir au moins une lettre ou un chiffre dans les champs Titre et Auteur.");
      } else {
        console.error("Erreur : showToast() introuvable.");
      }
      return;
    }

    console.log(`Recherche de livre : Titre = "${title}", Auteur = "${author}"`);

    if (typeof searchBooks === "function") {
      searchBooks(title, author);
    } else {
      console.error("Erreur : searchBooks() introuvable.");
    }
  });
}
