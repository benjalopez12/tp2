var CANTIDAD_NUMEROS = 10;

function generarNumerosAleatorios(cantidad) {
    var numeros = [];
    for (var i = 0; i < cantidad; i++) {
        var numero = Math.floor(Math.random() * 100);
        numeros.push(numero);
    }
    return numeros;
}
var numeros = generarNumerosAleatorios(CANTIDAD_NUMEROS);
numeros.sort(function(a, b) {
    return a - b;
});
console.log("Lista de números aleatorios ordenada de menor a mayor:");
for (var i = 0; i < numeros.length; i++) {
    console.log((i + 1) + ". " + numeros[i]);
}
