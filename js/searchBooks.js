// Recherche de livres via l'API Google Books
async function searchBooks(title, author) {
    try {
        const query = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
        const response = await fetch(query);
        if (!response.ok) throw new Error('Erreur lors de la récupération des données.');

        const data = await response.json();
        console.log(data.items);
        displayResults(data.items);
    } catch (error) {
        console.error(error);
        showToast("Une erreur s'est produite lors de la recherche des livres.");
    };

}
