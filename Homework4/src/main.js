var PositionError = window.PositionError || function(message) {
    this.message = message;
  };
  

document.addEventListener("DOMContentLoaded", function() {
    var locator = document.getElementById("out");
    var map = L.map('map').setView([0, 0], 13);
  
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      }
      else {
        locator.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
  
    function showPosition(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
  
      locator.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lng;
  
      var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      });
  
      tileLayer.addTo(map);
  
      var marker = L.marker([lat, lng]).addTo(map);
  
      map.panTo([lat, lng]);
    }
  
    function showError(error) {
      if (error instanceof PositionError) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            locator.innerHTML = "User denied the request for Geolocation."
            break;
          case error.POSITION_UNAVAILABLE:
            locator.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            locator.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            locator.innerHTML = "An unknown error occurred."
            break;
        }
      } else {
        locator.innerHTML = "An unknown error occurred.";
      }
    }
  
    getLocation();
  });
  