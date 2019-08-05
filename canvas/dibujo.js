var d = document.getElementById("dibujo"); //obteniendo elemento por id
var lienzo = d.getContext("2d"); //funcion del objeto canvas, obtiene area de dibujo

function dibujarLinea(color, xinit, yinit, xfin, yfin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

// Bordes
dibujarLinea('black', 0, 0, 0, 500);
dibujarLinea('black', 0, 0, 500, 0);
dibujarLinea('black', 500, 0, 500, 500);
dibujarLinea('black', 0, 500, 500, 500);

for (let i = 0; i < 500; i+=10) {
    dibujarLinea('red', 0, i, i+10, 500);
    dibujarLinea('blue', 500, i+10, i, 0);
}

for (let i = 500; i > 0; i-=10) {
    dibujarLinea('green', 0, i, 500-i, 0);
    dibujarLinea('gray', 500-i, 500, 500, i);
}

// var lineas = 50;
// var l = 0;
// var yi, xf;
// while (l < lineas) {
//     yi = 10*l;
//     xf = 10*(l+1);
//     dibujarLinea('blue', 0, yi, xf, 500);
//     l++;
// }