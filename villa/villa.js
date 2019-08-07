var villa = document.getElementById("villa");
var papel = villa.getContext("2d");
document.addEventListener("keydown", moverAJames);

var mapa = "img/tile.png"; //ruta de imagen
var imgVaca = "img/vaca.png"; 
var imgPollo = "img/pollo.png"; 
var imgCerdo = "img/cerdo.png"; 
var imgJames = "img/james.png"; 
var jamesX = 170;
var jamesY = 170;
var cantidad = aleatorio(5, 15);
var vacaX = [];
var vacaY = [];
var polloX = [];
var polloY = [];
var cerdoX = [];
var cerdoY = [];

// almaceno coordenadas para cada animalito en los array, tantas veces 'cantidad'
for (var i = 0; i < cantidad; i++) {
    vacaX[i] = aleatorio(0, 420);
    vacaY[i] = aleatorio(0, 420);
    polloX[i] = aleatorio(0, 420);
    polloY[i] = aleatorio(0, 420);
    cerdoX[i] = aleatorio(0, 420);
    cerdoY[i] = aleatorio(0, 420);
}

var teclas = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
}

function moverAJames(e) {
    var mov = 3;
    if(e.keyCode == teclas.UP){
        jamesY = jamesY - mov;
    } else if(e.keyCode == teclas.RIGHT){
        jamesX = jamesX + mov;
    } else if(e.keyCode == teclas.DOWN){
        jamesY = jamesY + mov;
    } else if(e.keyCode == teclas.LEFT){
        jamesX = jamesX - mov;
    }
    dibujar();
}

var fondo = {
    url: mapa,
    cargaOk: false
};

var vaca = {
    url: imgVaca,
    cargaOk: false
};

var pollo = {
    url: imgPollo,
    cargaOk: false
};

var cerdo = {
    url: imgCerdo,
    cargaOk: false
};

var james = {
    url: imgJames,
    cargaOk: false
};

//Se crea objeto imagen, esa imagen se inserta en el canvas
fondo.objeto = new Image(); // instancia de la clase objeto que se guarda en var imagen
fondo.objeto.src = fondo.url; // se asigna la ruta var mapa mediante atributo src del objeto
fondo.objeto.addEventListener("load", cargarFondo); // se triggea evento de carga de la imagen, 
                                                    // una vez definido el atributo src

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

james.objeto = new Image();
james.objeto.src = james.url;
james.objeto.addEventListener("load", cargarJames);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarJames() {
    james.cargaOk = true;
    dibujar();
}

function dibujar() {
    // al canvas se le agrega la imagen mediante la funsion drawImage del objeto Image
    // la funsion solo se ejecuta cuando la imagen termina de cargar (load)
    // objeto fondo como primer parametro, luego posision x e y donde se dibujara
    if(fondo.cargaOk){
        papel.drawImage(fondo.objeto, 0, 0); 
    }
    if(vaca.cargaOk){
        for (var i = 0; i < cantidad; i++) {
            papel.drawImage(vaca.objeto, vacaX[i], vacaY[i]);
        }
    }
    if(pollo.cargaOk){
        for (let i = 0; i < cantidad; i++) {
            papel.drawImage(pollo.objeto, polloX[i], polloY[i]); 
        }
    }
    if(cerdo.cargaOk){
        for (let i = 0; i < cantidad; i++) {
            papel.drawImage(cerdo.objeto, cerdoX[i], cerdoY[i]); 
        }
    }
    if(james.cargaOk){
        papel.drawImage(james.objeto, jamesX, jamesY); 
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}