var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.precoReal = function () {
        return "R$".concat(this.preco);
    };
    return Produto;
}());
var livro = new Produto('A guerra dos tronos', 200);
console.log(livro.nome);
console.log(livro.precoReal());
// ============================================
// InstanceOf
console.log(livro instanceof Produto);
var Livro = /** @class */ (function () {
    function Livro(autor) {
        this.autor = autor;
    }
    return Livro;
}());
var Jogo = /** @class */ (function () {
    function Jogo(jogadores) {
        this.jogadores = jogadores;
    }
    return Jogo;
}());
// função que faz busca e retorna um ou outro
function buscarProdutos(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo(1);
    }
    return null;
}
var produto = buscarProdutos('O Hobbit');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
var produto2 = buscarProdutos('Dark Souls');
if (produto2 instanceof Jogo) {
    console.log(produto2.jogadores);
}
// ============================================
// Extends
var Produto2 = /** @class */ (function () {
    function Produto2(nome) {
        this.nome = nome;
    }
    return Produto2;
}());
var Livro2 = /** @class */ (function (_super) {
    __extends(Livro2, _super);
    // passar propriedades da classe extendida
    function Livro2(nome, autor) {
        // chamar as propriedades em super()
        var _this = _super.call(this, nome) || this;
        _this.autor = autor;
        return _this;
    }
    return Livro2;
}(Produto2));
var Jogo2 = /** @class */ (function (_super) {
    __extends(Jogo2, _super);
    function Jogo2(nome, jogadores) {
        var _this = _super.call(this, nome) || this;
        _this.jogadores = jogadores;
        return _this;
    }
    return Jogo2;
}(Produto2));
// função que faz busca e retorna um ou outro
function buscarProdutos2(busca) {
    if (busca === "O Hobbit") {
        return new Livro2("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo2("Dark Souls", 1);
    }
    return null;
}
var produto3 = buscarProdutos2('Dark Souls');
if (produto3 instanceof Livro) {
    console.log(produto3.autor);
}
if (produto3 instanceof Jogo) {
    console.log(produto3.nome);
}
if (produto3 instanceof Produto2) {
    console.log(produto3.nome);
}
var honda = {
    nome: "Honda",
};
console.log(honda instanceof Carro);
