// Affichage de la Poch'Liste
function displayPochList() {
    const pochList = JSON.parse(sessionStorage.getItem('pochList')) || [];
    pochListContainer.innerHTML = pochList.length ? "" : "<p>Aucun livre sélectionné.</p>";

    pochList.forEach((book) => {
        const bookInfo = book.volumeInfo;
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('poch-item');

        bookDiv.innerHTML = `
            <h3>${bookInfo.title || "Titre non disponible"}</h3>
            <p id="pochAuth">${bookInfo.authors ? `Auteur : ${bookInfo.authors[0]}` : "Auteur non disponible"}</p>
            <p>${bookInfo.description ? bookInfo.description.substring(0, 200) + "..." : "Description non disponible."}</p>
            <img src="${bookInfo.imageLinks?.thumbnail || "logo/unavailable.png"}" alt="Couverture du livre">
        `;

        // Création du conteneur du bookmark avec tooltip
        const trashContainer = document.createElement('div');
        trashContainer.classList.add('trash-container');

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip-text');
        tooltip.textContent = "Supprimer ce livre";
        const trashIcon = document.createElement('img');
        trashIcon.src = "logo/trash.svg";
        trashIcon.alt = "Supprimer de la Poch'Liste";
        trashIcon.classList.add('trash-icon');
        trashIcon.addEventListener('click', () => removeFromPochList(book.id));

        trashContainer.appendChild(trashIcon);
        trashContainer.appendChild(tooltip);
        bookDiv.appendChild(trashContainer);
        pochListContainer.appendChild(bookDiv);
    });
}