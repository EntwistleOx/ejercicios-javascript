// variables globales
// array asociativo, el indice es texto
var imagenes = [];
imagenes["Cauchin"] = "img/vaca.png";
imagenes["Pokacho"] = "img/pollo.png";
imagenes["Tocinauro"] = "img/cerdo.png";

var coleccion = [];
// al usar push se crean indices
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// for in - opera segun cantidad de objetos
// la variable indica el indice
// for (var index in coleccion) {
//     coleccion[index].mostrar();
// }

// for of - opera segun cantidad de objetos
// la variable indica la instancia del objeto
for (var obj of coleccion) {
    obj.imagen.addEventListener("click", meNombro);
    obj.mostrar();
}

function meNombro() {
    obj.hablar();
}