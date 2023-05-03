// --------AULA 201

// Declarar uma variável com o seu nome
    let nome ="Igor"

// Declarar uma variável com a sua idade
    let idade=29;

    // Declarar uma variável com a sua comida favorita e não atribuir valor
    let comidaFavorita;

    // Atribuir valor a sua comida favorita
    comidaFavorita = "Salada de jiló"

    // Declarar 5 variáveis diferentes sem valores
    var var1,
        var2,
        var3,
        var4,
        var5;


// --------AULA 202

// Declare uma variável contendo uma string
    let string = "Temos aqui uma String"

// Declare uma variável contendo um número dentro de uma string
    let numeroString = "1312"

// Declare uma variável com a sua idade
    let varIdade = 29;

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
    let varNome = "Igor"
    let varSobrenome = "Simões Fugiwara"
    let nomeCompleto = `${varNome} ${varSobrenome}`

// Coloque a seguinte frase em uma variável: It's time
    var introUFC = `It's time`

// Verifique o tipo da variável que contém o seu nome
    console.log(typeof nomeCompleto);


// --------AULA 203

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// 35

// Crie duas expressões que retornem NaN
    let nan1 = "28s"/2
    let nan2 = "23kg"* 35;

// Somar a string '200' com o número 50 e retornar 250
    var valor1 ="200"
    var valor2 = 50
    var result = +valor1 +valor2

// Incremente o número 5 e retorne o seu valor incrementado
    var incrementar = +result +5
    console.log(incrementar);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

    // Desse jeitão
    pesoPorDois = numero/2 + unidade


// --------AULA 204

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
    let minhaIdade, parente;
        minhaIdade = 29;
        parente = 54;

        if(minhaIdade>parente){
            console.log("Você é mais velho.");
        }else if (minhaIdade==parente){
            console.log('Idades iguais!');
        }else {
            console.log('Você é mais novo.');
        }

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Truthy

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
    if (china>brasil) {
        console.log('China é mais populoso');
    }else if (brasil==china){
        console.log('População equivalente igual');
    }else {
        console.log('Brasil é mais populoso');
    }
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
    //Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
    //Cão


// --------AULA 205

// Crie uma função para verificar se um valor é Truthy
function verificar (valor) {
    if (valor) return "Valor é Truthy";
    else return "Valor Falsy"
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado1, lado2, lado3, lado4){
    return `O valor do peŕmietro é de ${lado1+lado2+lado3+lado4}`;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `Seja bem vindo ${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par
function ehPar(valor){
    if(typeof valor == number){
        if (valor%2 === 0) return "Valor é par";
        else "Valor é impar";;
    }else "Valor digitado não é numero"
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function qualTipo(valor){
    return typeof valor;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', nomeCompleto);


// Corrija o erro abaixo
    function precisoVisitar(paisesVisitados) {
        var totalPaises = 193;
        return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }
    function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

//   RESOLUÇÃO
var totalPaises = 193;
    function precisoVisitar(paisesVisitados) {
        return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }
    function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
    }

precisoVisitar(20);
jaVisitei(20);


// --------AULA 206

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
let dadosPessoais = {
    nome: 'Igor',
    sobrenome: 'Fugiwara',
    showName() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
//   resolução
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'viralata',
    idade: 6,
    cor: 'caramelo',
    latir(ver){
        if(ver==='homem'){
            alert('AUUUUUU')
        }
    }
}
cachorro.latir('homem');
