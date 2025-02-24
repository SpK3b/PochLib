# Poch'Lib

Poch'Lib est une application front-end en Single Page Application (SPA) développée pour "La Plume enchantée", une librairie familiale basée à Nice. Ce projet permet aux clients de rechercher des livres via l'API Google Books et d'ajouter leurs sélections dans leur "Poch'Liste" afin de récupérer les ouvrages en boutique.

## Fonctionnalités

- **Recherche de livres**  
  Recherchez des livres en entrant un titre et/ou un auteur. Les résultats affichent le titre, l'ISBN, l'auteur, une description limitée et une miniature de la couverture.

- **Sélection (Bookmark)**  
  Ajoutez un livre à votre "Poch'Liste" en cliquant sur l'icône bookmark. Une fois sélectionné, l'icône devient grise, le tooltip indique "Ajouté à Ma Poch'Liste" et le livre est enregistré dans le sessionStorage.

- **Suppression**  
  Dans la section "Ma Poch'Liste", retirez un livre en cliquant sur l'icône corbeille. Le livre est alors supprimé de la liste et redeviendra sélectionnable dans les résultats de recherche.

- **Mise à jour automatique**  
  La "Poch'Liste" se met à jour immédiatement à chaque ajout ou suppression. Les résultats de recherche sont également rafraîchis pour refléter les livres déjà sélectionnés.

- **Notifications Toast**  
  Des notifications toast apparaissent pour confirmer les actions (ajout ou suppression).

- **Responsive Design**  
  L'application est conçue en mobile-first et s'adapte aux formats mobile, tablette et bureau.

## Installation

### Prérequis

- Un navigateur web moderne.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optionnel, pour un rechargement en direct lors du développement).
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveSassCompiler) si vous utilisez des fichiers SCSS.

### Étapes d'installation

1. **Cloner le dépôt :**
    ```bash
    git clone https://https://github.com/SpK3b/PochLib.git

2. **Naviguer dans le répertoire du projet :**

    ```bash
    cd pochlib   

3. **Lancer l'application :** 

Ouvrez le fichier index.html dans votre navigateur, ou
Utilisez Live Server pour lancer un serveur de développement local.
(Optionnel) Compiler le SCSS en CSS :

Si vous utilisez des fichiers SCSS, lancez le Live Sass Compiler pour générer automatiquement le fichier CSS.


#### Utilisation

1. **Recherche :**

- Cliquez sur le bouton "Ajouter un livre" pour afficher le formulaire de recherche.
- Saisissez un titre et/ou un auteur (les champs doivent contenir au moins une lettre ou un chiffre).
- Cliquez sur "Rechercher" pour lancer la recherche via l'API Google Books.
- Les résultats s'affichent dans le conteneur #resultsContainer, juste au-dessus de la section "Ma Poch'Liste".

2. **Sélection :**

- Dans les résultats, cliquez sur l'icône bookmark pour ajouter un livre à la Poch'Liste.
- L'icône se transforme en grise et le tooltip indique "Ajouté à Ma Poch'Liste".
- La section "Ma Poch'Liste" se met à jour automatiquement.

3. **Suppression :**

- Dans la section "Ma Poch'Liste", cliquez sur l'icône corbeille pour retirer un livre.
- Le livre est supprimé de la Poch'Liste et, lors du rafraîchissement des résultats, il redeviendra sélectionnable.

4. **Notifications :**

- Des notifications toast apparaissent pour confirmer l'ajout ou la suppression d'un livre.

##### Dépendances

- Google Books API : Utilisée pour la recherche de livres.
- SessionStorage : Pour stocker la Poch'Liste côté client.
- SASS/SCSS : Pour une gestion optimisée du CSS (optionnel).
- Vanilla JavaScript : Aucun framework externe n'est utilisé.
