// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    console.log('paso por home.js');
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    //Inicia un mapa y se carga cuando se inicia una nueva pagina
    initMap();
    var watchID = navigator.geolocation.watchPosition(funcionExito,funcionError, opcionesGPS);
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="principal"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})
/**
 * @description Funcion que se ejecuta cuando el mapa se inicia exitosamente. 
 * Esta funcion actualiza los datos del marcador, la posicion y el centro del mapa.
 * @param position 
 * 
 * */
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
  map.setZoom(17);
  marcador.setPosition(pos);
}
/**
 * @description Funcion que se ejecuta cuando el mapa no se pudo iniciar. 
 * @param {*} error 
 */
function funcionError(error){
  console.log("hubo un error");
}
// Variable que contiene propiedades de un mapa
var opcionesGPS={
  timeout: 5000,
  enableHighAccuracy: true,
}

//Uso del mapa
var map;
var marcador;
/**
 * @description Funcion que permite iniciar un nuevo mapa
 */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  marcador = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map
  });

//Esta esperando el evento click para ejecutar la funcion que contiene.
  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}
/**
 * @description Funcion que permite generar un nuevo marcador en el mapa
 * @param {*} latLng 
 * @param {*} map
 */
function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}