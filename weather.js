document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const searchTerm = document.getElementById('search').value;
    console.log('Recherche soumise :', searchTerm);
});