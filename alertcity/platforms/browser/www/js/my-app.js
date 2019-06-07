// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Listado de rutas dentro del la App
    routes: [
      {
        path: '/login/',
        url: 'login.html',
      },
      {
        path: '/register/',
        url: 'register.html',
      },
      {
        path: '/home/',
        url: 'home.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/alertCenter/',
        url: 'alertCenter.html',
      },
      {
        path: '/alerta/',
        url: 'alerta.html',
      },
      {
        path: '/perfil/',
        url: 'perfil.html',

    },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function(e) {
    // Do something here when page loaded and initialized
    
    console.log(e);
});

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function(e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
    console.log(e);
});
