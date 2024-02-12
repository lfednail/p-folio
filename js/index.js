document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');
  
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });
  

// Utilisez const pour l'instance ScrollReveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

// Créez un tableau d'objets pour définir les éléments et leurs options
const revealElements = [
    { selector: '.logo', delay: 200, origin: 'left' },
    { selector: '.navbar', delay: 400, origin: 'top' },
    { selector: '.menu-btn', delay: 520, origin: 'right' },
    { selector: '.home-text span', delay: 600, origin: 'top' },
    { selector: '.home-text h1', delay: 680, origin: 'left' },
    { selector: '.home-text p', delay: 750, origin: 'right' },
    { selector: '.main-btn', delay: 860, origin: 'left' },
    { selector: '.share', delay: 950, origin: 'bottom' },
    { selector: '.home-img', delay: 1000, origin: 'right' }
];

// Utilisez une boucle pour réduire la duplication de code
revealElements.forEach(element => sr.reveal(element.selector, { delay: element.delay, origin: element.origin }));

// Utilisez addEventListener pour gérer les événements de formulaire
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vous pouvez utiliser AJAX ou Fetch API pour envoyer les données du formulaire à votre serveur.
    // Example:
    // fetch('/submit', {
    //   method: 'POST',
    //   body: JSON.stringify({ name: name, email: email, message: message }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));
});


