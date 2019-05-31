// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    console.log('paso por home.js');
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    initMap();
    var watchID = navigator.geolocation.watchPosition(funcionExito,funcionError, opcionesGPS);
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="principal"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})
function funcionExito(position){
  console.log('Latitude: '         + position.coords.latitude    );      
  console.log('Longitude: '         + position.coords.longitude    );  
  console.log('Altitude: '          + position.coords.altitude      );    
  console.log('Accuracy: '          + position.coords.accuracy      );    
  console.log('Altitude Accuracy: ' + position.coords.altitudeAccuracy ); 
  console.log('Heading: '           + position.coords.heading     );      
  console.log('Speed: '             + position.coords.speed      );       
  console.log('Timestamp: '         + position.timestamp         );   
  
  $$("#lat").html(position.coords.latitude);
  $$("#lgn").html(position.coords.longitude);

  var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
  map.setCenter(pos);
  map.setZoom(14);
  marcador.setPosition(pos);
}
function funcionError(error){
  console.log("hubo un error");
}

var opcionesGPS={
  timeout: 5000,
  enableHighAccuracy: true
}

//Uso del mapa
var map;
var marcador;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  marcador = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map
  });
  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}