// Affichage des résultats de recherche
function displayResults(books) {

    // Stocker les résultats dans une variable globale pour pouvoir les rafraîchir plus tard
    window.lastSearchResults = books;

    // Récupérer le conteneur dédié aux résultats
    const resultsContainer = document.getElementById("resultsContainer");
    if (!resultsContainer) {
        console.error("Erreur : #resultsContainer introuvable dans le DOM.");
        return;
    }

    // Supprimer les anciens résultats (pour éviter les doublons)
    resultsContainer.innerHTML = "";

    if (!books || books.length === 0) {
        resultsContainer.innerHTML = "<p>Aucun livre n’a été trouvé.</p>";
        return;
    }

    // Récupérer la Poch'Liste depuis sessionStorage
    const pochList = JSON.parse(sessionStorage.getItem('pochList')) || [];

    // Parcourir les livres et créer les cartes
    books.forEach((book) => {
        const bookInfo = book.volumeInfo;
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');

        // Récupération de l'ISBN
        let isbn = "ISBN non disponible";
        if (bookInfo.industryIdentifiers) {
            const isbnData = bookInfo.industryIdentifiers.find(id => id.type === "ISBN_13") ||
                bookInfo.industryIdentifiers.find(id => id.type === "ISBN_10");
            if (isbnData) {
                isbn = `${isbnData.type}: ${isbnData.identifier}`;
            }
        }

        // Construction du contenu de la carte
        bookDiv.innerHTML = `
            <h3>${bookInfo.title || "Titre non disponible"}</h3>
            <p>${isbn}</p>
            <p>${bookInfo.authors ? `Auteur : ${bookInfo.authors[0]}` : "Auteur non disponible"}</p>
            <p>${bookInfo.description ? bookInfo.description.substring(0, 200) + "..." : "Description non disponible."}</p>
            <img src="${bookInfo.imageLinks?.thumbnail || "logo/unavailable.png"}" alt="Couverture du livre">
        `;

        // Création du conteneur du bookmark avec tooltip
        const bookmarkContainer = document.createElement('div');
        bookmarkContainer.classList.add('bookmark-container');

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip-text');
        tooltip.textContent = "Ajouter ce livre";

        const icon = document.createElement('img');
        icon.src = "logo/bookmark.svg";
        icon.alt = "Ajouter à la poch'liste";
        icon.classList.add('bookmark-icon');

        // Vérifier si le livre est déjà enregistré dans la Poch'Liste
        const isSaved = pochList.some(item => item.id === book.id);
        if (isSaved) {
            icon.classList.add('selected');
            /* icon.src = "logo/bookmark-gray.svg"; // Utiliser une icône bookmark grise */
            tooltip.textContent = "Ajouté à Ma Poch'Liste";
            icon.style.pointerEvents = "none";
        } else {
            icon.addEventListener('click', () => togglePochList(book, icon, tooltip));
        }

        bookmarkContainer.appendChild(icon);
        bookmarkContainer.appendChild(tooltip);
        bookDiv.appendChild(bookmarkContainer);
        resultsContainer.appendChild(bookDiv);
    });
}
