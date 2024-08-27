// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredonda(value: number): number;
function arredonda(value: string): string;
function arredonda(value: number|string): number|string {
  if (typeof value === 'number') {
  return Math.ceil(value)
  }else {
    return `${Math.ceil(+value)}`
    // return Math.ceil(Number(value)).toString() //outra forma de fazer
  }
}

console.log(arredonda(80));
console.log(arredonda('180'));
