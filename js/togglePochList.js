// Gestion de la Poch'Liste
function togglePochList(book, iconElement, tooltip) {

    let pochList;
    try {
        pochList = JSON.parse(sessionStorage.getItem('pochList')) || [];
    } catch (error) {
        console.error("Erreur de lecture du sessionStorage", error);
        pochList = [];
    }

    const bookId = book.id;

    if (!pochList.some(item => item.id === bookId)) {
        pochList.push(book);
        sessionStorage.setItem('pochList', JSON.stringify(pochList));

        iconElement.classList.add('selected');
        iconElement.style.pointerEvents = "none";
        tooltip.textContent = "Ajouté à Ma Poch'Liste";
        // Met à jour immédiatement la Poch'Liste affichée
        if (typeof displayPochList === "function") {
            displayPochList();
        } else {
            console.error("Erreur : displayPochList() est introuvable.");
        }

        // Afficher une notification de confirmation
        if (typeof showToast === "function") {
            showToast("Livre ajouté à Ma Poch'Liste !");
        }

    }
}