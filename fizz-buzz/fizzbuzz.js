var minimo = 1;
var maximo = 100;
var divisible = false;
var fizz = 3;
var buzz = 5;

for (var i = minimo; i <= maximo; i++) {
    divisible = false;
    if(esDivisible(i, fizz)){
        divisible = true;
        document.write('Fizz');
    }
    if (esDivisible(i, buzz)) {
        divisible = true;
        document.write('Buzz');
    }    
    if (!divisible) {
        document.write(i);
    }
    document.write('<br/>');
}

function esDivisible(numero, divisor) {
    if(numero%divisor == 0){
        return true;
    }
    return false;
}