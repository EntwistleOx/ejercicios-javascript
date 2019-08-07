class Pakiman { // clase, definicion de un objeto
    constructor(nombre, vida, ataque) { // para construir la clase
        // this, indicador de la instancia de clase
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
        this.imagen.id = nombre;
    }

    // al declarar funciones dentro de las clases, no es necesario escribir function
    // esta implicito
    hablar() {
        alert('Yo soy '+this.nombre);
    }

    mostrar() {
        // document es todo el documento, se debe especificar donde se insertara el hijo
        // por eso se agrega .body, es a .body donde agrego contenido
        document.body.appendChild(this.imagen); 
        document.write('<p>'); 
        document.write('<b>' + this.nombre + '</b>'); 
        document.write('<br/>Vida: ' + this.vida );
        document.write('<br/>Ataque: ' + this.ataque); 
        document.write('</p>'); 
        document.write('<hr>'); 
    }
}