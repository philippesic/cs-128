document.addEventListener("DOMContentLoaded", function() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.getRegistrations().then(registrations => {
            if (registrations.length === 0) {
              navigator.serviceWorker.register('./service-worker.js')
                .then(registration => {
                  console.log('Service worker registered:', registration);
                })
                .catch(error => {
                  console.log('Service worker registration failed:', error);
                });
            }
          });
        });
      }      
  });
  