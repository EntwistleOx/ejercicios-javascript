var canvas = document.getElementById("area");
var papel = canvas.getContext("2d");
document.addEventListener("keydown", drawByKey);
document.addEventListener("keydown", checkArrows);
document.addEventListener("keyup", resetArrowsFlags);
area.addEventListener("mousedown", mouseIsClicked); 
area.addEventListener("mousemove", drawByMouse);
area.addEventListener("mouseup", resetMouseFlag);

// flags para indicar si las flachas estan siendo presionadas, se inicializan en falso
var pressedUp = false;
var pressedRight = false;
var pressedDown = false;
var pressedLeft = false;
var mouseIsDrawing = false;

// objeto literal, constantes con codigo numerico de las flechas
var teclas = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
};

// define desde donde comienza a dibujar en caso de usar teclado
var x = 150;
var y = 150;

// setea en true los flags al momento de ser presionadas las flecas del teclado
function checkArrows(e) {
    if(e.keyCode == teclas.UP){
        pressedUp = true;
    } else if(e.keyCode == teclas.RIGHT){
        pressedRight = true;
    } else if(e.keyCode == teclas.DOWN){
        pressedDown = true;
    }else if(e.keyCode == teclas.LEFT){
        pressedLeft = true;
    }
}

// al soltar las flechas al dejar de dibujar devuelve los flags a falso
function resetArrowsFlags() {
    pressedUp = false;
    pressedRight = false;
    pressedDown = false;
    pressedLeft = false;
}

// invoca al metodo dibujarLinea dependiendo de las flechas presionadas
function drawByKey(e) {
    var color = "blue";
    var mov = 1;
    // Pinta lineas verticales, aca utilice un if, me acamoda mas que el switch =)
    if(pressedUp && pressedRight){
         // diagonal derecha arriba
        draw(color, x, y, x+mov, y-mov, papel);
        x = x + mov;
        y = y - mov;
    } else if(pressedRight && pressedDown){
        // diagonal derecha abajo
        draw(color, x, y, x+mov, y+mov, papel);
        x = x + mov;
        y = y + mov;
    } else if(pressedDown && pressedLeft){
        // diagonal izquierda abajo
        draw(color, x, y, x-mov, y+mov, papel);
        x = x - mov;
        y = y + mov;
    } else if(pressedLeft && pressedUp){
        // diagonal izquierda arriba
        draw(color, x, y, x-mov, y-mov, papel);
        x = x - mov;
        y = y - mov;
    } 

    // Pinta linea horizontales y verticales
    switch (e.keyCode) {
        case teclas.UP:
            draw(color, x, y, x, y-mov, papel);
            y = y - mov;
        break;
        case teclas.RIGHT:
            draw(color, x, y, x+mov, y, papel);
            x = x + mov;
        break;
        case teclas.DOWN:
            draw(color, x, y, x, y+mov, papel);
            y = y + mov;
        break;
        case teclas.LEFT:
            draw(color, x, y, x-mov, y, papel);
            x = x-mov;
        break;
    }
}

// incova a metodo mousePosition para obtener posision real del puntero del mouse y setea flag en true 
function mouseIsClicked(e) {
    var mousePos = mousePosition(e.x, e.y);
    x = mousePos.xMouse;
    y = mousePos.yMouse;
    mouseIsDrawing = true;
}

// invoca a mousePosition y pinta desde la ubicacion en la que esta el puntero
function drawByMouse(e) {
    var color = "red";
    var mov = 1;
    var realPos = mousePosition(e.clientX, e.clientY);
    if(mouseIsDrawing == true) {
        draw(color, x, y, realPos.xMouse+mov, realPos.yMouse-mov, papel);
    }
    x = realPos.xMouse+mov;
    y = realPos.yMouse-mov;
}

// flag a falso
function resetMouseFlag() {
    mouseIsDrawing = false;
}

// obtiene posision real del mouse en el canvas mediante funcion getBoundingClientRect()
function mousePosition(posX, posY) {
    var rect = canvas.getBoundingClientRect();
    return {
        xMouse : posX - rect.left,
        yMouse : posY - rect.top
    }
}

// dibuja en el lienzo
function draw(color, xinit, yinit, xfin, yfin, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}