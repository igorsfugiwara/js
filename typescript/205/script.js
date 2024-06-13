var numeros = [10, 20, 30, 40, 50, 3];
var valores = [10, "taxas", 30, 40, "produtos", 3];
function maiorQueDez(data) {
    return data.filter(function (n) { return n > 10; });
}
function filtrarValores(data) {
    return data.filter(function (item) { return typeof item === 'number'; });
}
console.log(maiorQueDez(numeros));
console.log(filtrarValores(valores));
