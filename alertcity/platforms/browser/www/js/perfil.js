// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    $$("#btn-tomar").on("click", tomarFoto);
});

function tomarFoto() {
    console.log("click en el btn tomar foto");

    //navigator.camera.getPicture(hayFoto, noHayFoto, opciones);
    app.dialog.create({
        title: 'Seleciión de Captura de Imagen',
        text: 'Elija de donde quiere obtener la imagen',
        buttons: [{
                text: 'Cámara',
                bold: true,
                onClick: function() {
                    console.log("Eligió cámara");
                    navigator.camera.getPicture(hayFoto, noHayFoto, opcionesCamara);
                }
            },
            {
                text: 'Galería',
                bold: true,
                onClick: function() {
                    console.log("Eligió Galería");
                    navigator.camera.getPicture(hayFoto, noHayFoto, opcionesGaleria);
                }
            },
            {
                text: 'Cancelar',
                close: true,
            },
        ],
        verticalButtons: true,
    }).open();
}

function hayFoto(foto) {
    console.log(foto);
    //$$("#foto").attr("src", foto);
    generarCuadroFoto(foto);
}

function noHayFoto(error) {
    console.log(error);
}

var opcionesCamara = {
    correctOrientation: true,
    sourceType: 1,
    allowEdit: true,
    quality: 70,
    saveToPhotoAlbum: true,
};
var opcionesGaleria = {
    correctOrientation: true,
    sourceType: 0,
    allowEdit: true,
};

function generarCuadroFoto(foto) {
    var html_txt = "";

    html_txt += '<div class="card demo-facebook-card">';
    html_txt += '<div class="card-header">';
    html_txt += '<div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>';
    html_txt += '<div class="demo-facebook-name">Mi Foto</div>';
    html_txt += '<div class="demo-facebook-date">' + (new Date()).toLocaleString() + '</div>';
    html_txt += '</div>';
    html_txt += '<div class="card-content"> <img src="' + foto + '" width="100%"/></div>';
    //htm_text += '<div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div>';
    html_txt += '</div>';

    $$("#contenedor").append(html_txt);

}