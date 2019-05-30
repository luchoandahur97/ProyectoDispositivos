// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function(e) {
    // Do something here when page loaded and initialized
    initMap();
    var watchID = navigator.geolocation.watchPosition(funcionExito, funcionError, opcionesGPS);
    console.log(e);
});

var marcador;
var marcador2; //Marcador de prueba para crear un segundo supuesto usuario en el mapa
var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });

    //Mi marcador con posición actual
    marcador = new google.maps.Marker({
        position: {
            lat: -34.397,
            lng: 150.644
        },
        map: map
    });

    //Marcador de persona que pide auxilio
    marcador2 = new google.maps.Marker({
        position: {
            lat: -36.603,
            lng: -72.078
        },
        map: map
    });

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
}
//Uso del GPS
function funcionExito(position) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
    console.log('Altitude: ' + position.coords.altitude);
    console.log('Accuracy: ' + position.coords.accuracy);
    console.log('Altitude Accuracy: ' + position.coords.altitudeAccuracy);
    console.log('Heading: ' + position.coords.heading);
    console.log('Speed: ' + position.coords.speed);
    console.log('Timestamp: ' + position.timestamp);

    $$("#lat").html(position.coords.latitude);
    $$("#lgn").html(position.coords.longitude);

    var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
    map.setCenter(pos);
    map.setZoom(17);
    marcador.setPosition(pos);

}

function funcionError(error) {
    console.log("Hubo un error!!");
}
var opcionesGPS = {
    timeout: 5000,
    enableHighAccuracy: false
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}