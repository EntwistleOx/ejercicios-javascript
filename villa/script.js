class Villa {
    // constructor de clase
    // cantidad y coords por defecto vacios
    // cargaOk flag por defecto falso
    // isMapa flag si el objeto es el mapa
    constructor(nombre, cantidad = '', coords = '', isMapa = false) {
        this.nombre = nombre;
        this.imagen = new Image();
        this.imagen.src = biblioVilla[this.nombre];
        this.cargaOk = false;
        this.coords = coords;
        this.cantidad = cantidad;
        this.isMapa = isMapa;
        this.preparar();
    }
    
    // a cada imagen agrego eventlistener load, invoca a cargar()
    preparar () {
        this.imagen.addEventListener("load", this.cargar());
    }
    
    // setea flag de cargaOk a true, invoca a setear() 
    cargar() {
        this.cargaOk = true;
        this.setear();
    }
    
    // si cargaOk es true seteo cantidad y coordenadas en el canvas, luego dibuja
    // si cargaOk es falso avisa por consola
    setear() {
        if(this.cargaOk){
            this.setCantidad();
            this.setCoordenadas();
            this.dibujar();
        }else{
            console.log('Error ' + this.name)
        }
    }
    
    // si cantidad viene por parametro en el constructor se setea igual
    // si viene vacio se le asigna cantidad aleatoria 
    setCantidad() {
        if(this.cantidad){
            this.cantidad = this.cantidad;
        }else{
            this.cantidad = this.aleatorio(5, 10);
        }
    }
    
    // si flag es mapa es true las coordenadas son las que vienen por defecto
    // si flag es false, se asignan coordenadas aleatorias
    // en ambos se crea un array al cual se le insertan los valores
    setCoordenadas () {
        var coordenadas = [];
        if(this.isMapa){
            coordenadas.push(this.coords);
        }else{
            for (var i = 0; i < this.cantidad; i++) {
                coordenadas.push([this.aleatorio(0, 420), this.aleatorio(0, 420)]);
            }
        }
        this.coords = coordenadas;
    }

    // dibuja en el canvas usando los valores del objeto ya creado
    dibujar() {
        for (var i = 0; i < this.cantidad; i++) {
            papel.drawImage(this.imagen, this.coords[i][0], this.coords[i][1]);
        }
    }
    
    // genera numero aleatorios
    aleatorio(min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
}

document.addEventListener("keydown", moverAJames);
var lienzo = document.getElementById("villa");
var papel = lienzo.getContext("2d");

// objeto literal con valores de codigo de teclado
var teclas = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
}

// coleccion con rutas de las imagenes
var biblioVilla = [];
biblioVilla['Mapa'] = "img/tile.png";
biblioVilla['Vaca'] = "img/vaca.png";
biblioVilla['Pollo'] = "img/pollo.png";
biblioVilla['Cerdo'] = "img/cerdo.png";
biblioVilla['James'] = "img/james.png";

// creo cada objeto segun sus parametros
// el mapa va con cantidad y coordenadas establecidas // james solo va con cantidad 
// el ultimo parametro booleano es un flag para indicar si es el mapa
var villa = [];
villa.push(new Villa('Mapa', 1, [0, 0], true));
villa.push(new Villa('Vaca', false));
villa.push(new Villa('Pollo', false));
villa.push(new Villa('Cerdo', false));
villa.push(new Villa('James', 1, false));

for (const obj of villa) {
    obj.dibujar();
}

// funsion que se desencadena al moviemiento de las flechas del teclado
function moverAJames(e) {
    var mov = 3;
    if(e.keyCode == teclas.UP){
        villa[4].coords[0][1] = villa[4].coords[0][1] - mov;
    } else if(e.keyCode == teclas.RIGHT){
        villa[4].coords[0][0] = villa[4].coords[0][0] + mov;
    } else if(e.keyCode == teclas.DOWN){
        villa[4].coords[0][1] = villa[4].coords[0][1] + mov;
    } else if(e.keyCode == teclas.LEFT){
        villa[4].coords[0][0] = villa[4].coords[0][0] - mov;
    }
    // por cada clickeo de las flechas  repintar los elementos
    for (const obj of villa) {
        obj.dibujar();
    }
}

