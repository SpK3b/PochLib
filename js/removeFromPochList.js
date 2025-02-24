// Suppression d'un livre de la Poch'Liste
function removeFromPochList(bookId) {
    let pochList;
    try {
        pochList = JSON.parse(sessionStorage.getItem('pochList')) || [];
    } catch (error) {
        console.error("Erreur de lecture du sessionStorage", error);
        pochList = [];
    }
    pochList = pochList.filter(book => book.id !== bookId);
    sessionStorage.setItem('pochList', JSON.stringify(pochList));

    // Mettre à jour l'affichage de la Poch'Liste
    if (typeof displayPochList === "function") {
        displayPochList();
    }

    // Rafraîchir les résultats uniquement si le formulaire de recherche est visible
    const searchFormContainer = document.getElementById("searchForm");
    if (
        searchFormContainer &&
        searchFormContainer.style.display !== "none" &&
        window.lastSearchResults &&
        typeof displayResults === "function"
    ) {
        displayResults(window.lastSearchResults);
    }

    // Afficher un toast de confirmation
    if (typeof showToast === "function") {
        showToast("Livre supprimé de Ma Poch'Liste.");
    }
}
