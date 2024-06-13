// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const cep = document.querySelector('.cep');
const logradouro = document.querySelector('.logradouro');
const bairro = document.querySelector('.bairro');
const localidade = document.querySelector('.localidade');
const uf = document.querySelector('.uf');
const ddd = document.querySelector('.ddd');



btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(CEP) {
    fetch(`https://viaCEP.com.br/ws/${CEP}/json/`)
        .then(response => response.json())
        .then(body => {
            cep.innerText = body.cep
            logradouro.innerText = body.logradouro
            bairro.innerText = body.bairro
            localidade.innerText = body.localidade
            ddd.innerText = body.ddd
            uf.innerText = body.uf
        });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
content = document.querySelector('.content');
this.arrayIterative = []


function priceRefresher() {
    fetch("https://blockchain.info/ticker")
        .then(response => response.json())
        .then(btcJson => {
            content.innerText = btcJson.BRL.buy
        })
}


setInterval(priceRefresher, 15000)
// priceRefresher()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadaContainer = document.querySelector('.piada');
const proximaButton = document.querySelector('.proxima');

function randomJoke() {
    fetch('http://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
            piadaContainer.innerHTML = piada.value;
        })
    }
    randomJoke()
    proximaButton.addEventListener('click', randomJoke)