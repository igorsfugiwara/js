function arredonda(value) {
    if (typeof value === 'number') {
        return Math.ceil(value);
    }
    else {
        return "".concat(Math.ceil(+value));
        // return Math.ceil(Number(value)).toString() //outra forma de fazer
    }
}
console.log(arredonda(80));
console.log(arredonda('180'));
