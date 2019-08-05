var papel = document.getElementById("area").getContext("2d"); //funcion del objeto canvas, obtiene area de dibujo
document.addEventListener("keydown", dibujarPorTeclado);
var x = 100;
var y = 100;

// mousedown - mouseup
// evento, objetos 

// objeto literal
var teclas = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
};

dibujarLinea("red", x-1, y+1, x+1, y+1, papel);

function dibujarPorTeclado(e) {

    console.log(e);


    var color = "blue";
    var mov = 3;

    if(e.keyCode == 38 ){
        console.log('super!');
    }

    switch (e.keyCode) {
        case teclas.UP:
            dibujarLinea(color, x, y, x, y-mov, papel);
            y = y - mov;
        break;
        case teclas.RIGHT:
            dibujarLinea(color, x, y, x+mov, y, papel);
            x = x + mov;
        break;
        case teclas.DOWN:
            dibujarLinea(color, x, y, x, y+mov, papel);
            y = y + mov;
        break;
        case teclas.LEFT:
            dibujarLinea(color, x, y, x-mov, y, papel);
            x = x-mov;
        break;
    }
    //console.log(x + ' - ' + y);
}

function dibujarLinea(color, xinit, yinit, xfin, yfin, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}
