// variables globales
var imagenes = [];
imagenes["cauchin"] = "img/vaca.png";
imagenes["pokacho"] = "img/pollo.png";
imagenes["tocinauro"] = "img/cerdo.png";

class Pakiman {
    constructor(nombre, vida, ataque) {
        // this, indicador de la instancia de clase
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
    }

    // al declarar funciones dentro de las clases, no es necesario escribir function, esta implicito
    hablar() {
        alert(this.nombre);
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

pokacho.hablar();

// array asociativo, el indice es texto