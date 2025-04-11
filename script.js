// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche l'envoi immédiat du formulaire

    // Récupère les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Formulaire envoyé avec succès!');
        // Ici, tu pourrais envoyer les données à un serveur (AJAX ou autre)
    } else {
        alert('Tous les champs doivent être remplis.');
    }
});
