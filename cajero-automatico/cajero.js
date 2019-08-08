class Billete {
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var boton = document.getElementById("girar");
boton.addEventListener("click", girarDinero);
var parrafo = document.getElementById("resultado");
var total = document.getElementById("total");

var caja = [];
caja.push(new Billete(20000, 9));
caja.push(new Billete(10000, 10));
caja.push(new Billete(5000, 12));
caja.push(new Billete(2000, 15));
caja.push(new Billete(1000, 20));

var saldoInicial = 0;
for (const obj of caja) {
    saldoInicial += obj.cantidad*obj.valor;
}
total.innerHTML = 'Saldo en el Cajero: $'+saldoInicial;

var resultado = []; 
var dinero, porGirar, division, cantidad, girado;



function girarDinero() {
    dinero = parseInt(document.getElementById("dinero").value);
    porGirar = dinero; 
    if(dinero){
        for (const obj of caja) {
            if(porGirar > 0){
                division = Math.floor(porGirar/obj.valor);
                if(division > obj.cantidad){
                    girado = obj.cantidad;
                    cantidad = obj.cantidad*obj.valor;
                    obj.cantidad = obj.cantidad - obj.cantidad;
                }else{
                    girado = division;
                    cantidad = division * obj.valor;
                    obj.cantidad = obj.cantidad-division;
                }
                porGirar = porGirar - cantidad;
                resultado.push(new Billete(obj.valor, girado));

                var saldo = 0;
                for (const obj of caja) {
                    saldo += obj.cantidad*obj.valor;
                }
                total.innerHTML = 'Saldo en el Cajero: $'+saldo;
            }
        }
        
        if(porGirar > 0) {
            parrafo.innerHTML += "No es posible completar la operacion<hr/>";
        }else{
            for (var obj of resultado) {
                var giros;
                if(obj.cantidad > 0){
                    giros += obj.cantidad + ' billetes' + ' de $' + obj.valor + "<br>";
                }
                parrafo.innerHTML = giros;
            }
        }
    }else{
        parrafo.innerHTML += "No has agregado cantidad<hr/>";
    }
    
}