var locator = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    locator.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  locator.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}