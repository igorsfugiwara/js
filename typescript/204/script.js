function preencherDados(dados) {
    document.body.innerHTML += "\n    <div class=\"embed\">\n    <h2> ".concat(dados.nome, "</h2>\n    <p>").concat(dados.prices, "</p>\n    <p> tem teclado: ").concat(dados.teclado, "</p>\n    </div>\n    ");
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
var lenovo = {
    nome: 'Lenovo',
    prices: 3000,
    teclado: true
};
preencherDados(lenovo);
function pintarCategoria(categorias) {
    console.log(categorias);
    var bodyStyle = document.body.style;
    if (categorias === "front-end") {
        bodyStyle.backgroundColor = "grey";
    }
    else if (categorias === "back-end") {
        bodyStyle.backgroundColor = "grey";
    }
    else if (categorias === "fullstack") {
        bodyStyle.backgroundColor = "grey";
    }
}
pintarCategoria("front-end");
