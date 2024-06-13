function preencherDados(dados:Produto) {
    document.body.innerHTML += `
    <div class="embed">
    <h2> ${dados.nome}</h2>
    <p>${dados.prices}</p>
    <p> tem teclado: ${dados.teclado}</p>
    </div>
    `
}
type Produto = {
    nome: string,
    prices: number,
    teclado: boolean
}

preencherDados({
    nome: 'Computador',
    prices: 3000,
    teclado: false   
});

preencherDados({
    nome: 'Notebook',
    prices: 2500,
    teclado: true   
});

const lenovo: Produto = {
    nome: 'Lenovo',
    prices: 3000,
    teclado: true
}

preencherDados(lenovo)

type Categorias = "front-end" | "back-end" | "fullstack";
function pintarCategoria(categorias: Categorias){
    console.log(categorias);
    let bodyStyle = document.body.style
    if(categorias === "front-end"){
        bodyStyle.backgroundColor = "grey"
    }else if(categorias === "back-end"){
        bodyStyle.backgroundColor = "blue"
    } else if(categorias === "fullstack"){
        bodyStyle.backgroundColor = "red"
    }
    
}
pintarCategoria("front-end")