// Sélection des éléments du DOM et vérifications
const newBookHeading = document.querySelector('.h2');
const contentDiv = document.getElementById("pochList");
const pochListContainer = document.getElementById('pochListContainer');
const toastContainer = document.getElementById('toast-container');
// Création du conteneur pour les résultats de recherche
const resultsContainer = document.createElement("div");
resultsContainer.id = "resultsContainer";

// Insérer le conteneur des résultats juste avant la section "Ma poch'Liste"
const pochListSection = document.getElementById("pochList");
if (pochListSection && pochListSection.parentNode) {
    pochListSection.parentNode.insertBefore(resultsContainer, pochListSection);
} else {
    // Si la section "Ma poch'Liste" n'existe pas, on l'ajoute à la fin du body
    document.body.appendChild(resultsContainer);
}


if (!newBookHeading || !contentDiv || !pochListContainer || !toastContainer) {
    console.error("Erreur : Un élément du DOM est introuvable.");
}


// Création du bouton "Ajouter un livre"
const addButton = document.createElement('button');
addButton.textContent = 'Ajouter un livre';
addButton.id = 'addBookButton';
addButton.classList.add('btn');
newBookHeading.insertAdjacentElement('afterend', addButton);


// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", displayPochList);

// Gestion du bouton "Ajouter un livre"
addButton.addEventListener('click', () => {
    showForm();
    addButton.style.display = "none";
});
