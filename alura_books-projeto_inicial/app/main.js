// DECLARAÇÃO DE VARIAVEIS
let livros = []
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

// FETCH DA API SUGERIDA
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

