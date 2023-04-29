document.addEventListener("DOMContentLoaded", function(event) {
    const blue = document.getElementById('blue');
    const gold = document.getElementById('gold');
    const white = document.getElementById('white');

    const content = document.body;

    blue.addEventListener('click', function() {
        content.classList.add('background-blue');
        content.classList.remove('background-gold');
        content.classList.remove('background-white');
    });
    
    gold.addEventListener('click', function() {
        content.classList.add('background-gold');
        content.classList.remove('background-blue');
        content.classList.remove('background-white');
    });
    
    white.addEventListener('click', function() {
        content.classList.add('background-white');
        content.classList.remove('background-blue');
        content.classList.remove('background-gold');
    })

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
              console.log('Service worker registered:', registration);
            })
            .catch(error => {
              console.log('Service worker registration failed:', error);
            });
        });
      }
      });