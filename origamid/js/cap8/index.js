console.log("//--------------------------801");  // Aula 801

// Remova o erro 
// R: Primeiro declarar e depois chamar a função.
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log("preço é:", priceNumber('R$ 99,99')); //log para confirmar funcionamento


// Crie uma IIFE e isole o escopo
// de qualquer código JS.
var instrumento = "violão";

(function() {
    const instrumento = "guitarra"
    console.log(instrumento);
})

console.log(instrumento);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

// function active (callback) {     outro jeito de escrever essa função
//     return callback();           acima. 
// }

active( () => console.log("teste de active"));

//----------------------------------------------------------------
console.log("//--------------------------802");  // Aula 802 - Factory Function

function createButton(text) {
    function element() {
        const buttonElement =  document.createElement("button");
        buttonElement.innerText = text;
        return buttonElement;
    }

    return Object.freeze({
        text,
        element,
    })
}

const btnCompar = createButton('Comprar');
const btnVender = createButton('Vender');
console.log(btnCompar, btnVender);
// chamar no console por btnCompar.element()


// Constructor/Factory function

function Pessoa(nome){
        if (!(this instanceof Pessoa))  // ou (!new.target)
            return new Pessoa(nome);

        this.nome = nome
}

Pessoa.prototype.andar =  function (){
    return `${this.nome} andou`;
}

const designer = Pessoa('André');
console.log(designer);
