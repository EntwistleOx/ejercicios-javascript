class Billete {
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var cantidadDeseada = 200;
var dinero = cantidadDeseada;
var entregado = [];
var dif;
var div;
var rest;

for (const obj of caja) {
    if(dinero > 0){
        div = Math.floor(dinero/obj.valor);
        calc = div * obj.valor;
        rest = dinero - calc;
        if()
        dinero = rest;
        obj.cantidad = obj.cantidad-div;
        entregado.push(new Billete(obj.valor, div));
    }
}

console.log(entregado);

console.log(caja);

// 110 / 50 = 2.2 
// //div = dinero / obj.valor = 2

// b50 = 2
// //div = 2

// 2*50 = 100
// //div*obj.valor = 100

// // 
// 110 - 100 = 10
// -------------
// 10 / 20 = 0.5

// b20 = 0

// 0*20 = 0

// 10 - 0 = 10
// ------------
// 10 / 10 = 1

// b10 = 1

// 1*10 = 10

// 10 - 10 = 0
// ///////////
// 50: 2
// 20: 0
// 10: 1