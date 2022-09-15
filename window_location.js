console.log(window.location);
console.log("href: " + window.location.href);
console.log("hostname: " + window.location.hostname);
console.log(window.history);
console.log(history.forward);
console.log(history.back);
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(window.navigator.platform);
console.log(window.navigator.product);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.language);
console.log(window.navigator.onLine);
// window.confirm("thanks for registration");
// let person = prompt("Please enter your name", "Harry Potter");
// console.log(person);

function displayAlert() {
  alert("Hello\nHow are you?");
}
// window.setTimeout(displayAlert, 10000);
// document.cookie = "username=John Doe";

// document.cookie = "username=Shahadat; expires=Thu, 15 Dec 2022 11:00:00 UTC";
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();

function showPosition(position) {
  getReverseGeocodingData(position.coords.latitude, position.coords.longitude);

  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function getReverseGeocodingData(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  // This is making the Geocode request
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ latLng: latlng }, (results, status) => {
    if (status !== google.maps.GeocoderStatus.OK) {
      alert(status);
    }
    // This is checking to see if the Geoeode Status is OK before proceeding
    if (status == google.maps.GeocoderStatus.OK) {
      console.log(results);
      var address = results[0].formatted_address;
      console.log(address);
    }
  });
}
