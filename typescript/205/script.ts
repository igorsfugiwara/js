const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "taxas", 30, 40, "produtos", 3];

function maiorQueDez(data: number[]){
    // outra notação para number[] é Array<number | string>
    return data.filter( n => n > 10)
}
function filtrarValores(data: (number| string)[]){
    return data.filter( item => typeof item === 'number')
}


console.log(maiorQueDez(numeros));
console.log(filtrarValores(valores));


const dados = [
['senho dos aneis', 80],
['guerra dos tronos', 120]
]