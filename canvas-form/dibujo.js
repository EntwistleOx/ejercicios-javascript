var d = document.getElementById("dibujo"); //obteniendo elemento por id
var lienzo = d.getContext("2d"); //funcion del objeto canvas, obtiene area de dibujo
var marco = document.getElementById("txt_marco").value;
var texto = document.getElementById("txt_lineas").value;
var boton_ancho = document.getElementById("btn_marco");
var boton_lineas = document.getElementById("btn_lineas");

boton_ancho.addEventListener("click", asignarMarco);
boton_lineas.addEventListener("click", dibujoPorClick);

var array_colores = ["black", "red", "pink", "gray", "green", "yellow", "blue"];

function color_random() {
    return array_colores[Math.floor(Math.random() * array_colores.length)];
}

function asignarMarco(){
    d.width = marco;
    d.height = marco;
    dibujarLinea("black", 0, 0, marco, 0);
    dibujarLinea("black", marco, 0, marco, marco);
    dibujarLinea("black", 0, marco, marco, marco);
    dibujarLinea("black", 0, 0, 0, marco);
}

function dibujarLinea(color, xinit, yinit, xfin, yfin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto);  
    var ancho = d.width;
    espacio = ancho / lineas;
    for (let i = 0; i < ancho; i+=espacio) {
        dibujarLinea(color_random(), 0, i, i+espacio, ancho);
        dibujarLinea(color_random(), ancho, i+espacio, i, 0);
    }

    for (let i = ancho; i > 0; i-=espacio) {
        dibujarLinea(color_random(), 0, i, ancho-i, 0);
        dibujarLinea(color_random(), ancho-i, ancho, ancho, i);
    }
}