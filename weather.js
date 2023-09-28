document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById('search').value;
    console.log('Recherche soumise :', searchTerm);
});