class Produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$${this.preco}`
    }
}

const livro = new Produto('A guerra dos tronos', 200);
console.log(livro.nome);
console.log(livro.precoReal());


// ============================================
// InstanceOf
console.log(livro instanceof Produto);

class Livro{
    autor: string;
    constructor(autor: string){
        this.autor = autor;
    }
}

class Jogo{
    jogadores: number;
    constructor(jogadores: number){
        this.jogadores = jogadores;
    }
}

// função que faz busca e retorna um ou outro
function buscarProdutos (busca: string){
    if (busca === "O Hobbit"){
        return new Livro ("J. R. R. Tolkien");
    }
    if (busca === "Dark Souls"){
        return new Jogo (1);
    }
    return null
}

const produto = buscarProdutos('O Hobbit');
if(produto instanceof Livro){
    console.log(produto.autor);
}

const produto2 = buscarProdutos('Dark Souls');
if(produto2 instanceof Jogo){
    console.log(produto2.jogadores);
}
// ============================================
// Extends
class Produto2 {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Livro2 extends Produto2{
    autor: string;
    // passar propriedades da classe extendida
    constructor(nome: string, autor: string){
        // chamar as propriedades em super()
        super(nome)
        this.autor = autor;
    }
}

class Jogo2 extends Produto2{
    jogadores: number;
    constructor(nome: string, jogadores: number){
        super(nome)
        this.jogadores = jogadores;
    }
}

// função que faz busca e retorna um ou outro
function buscarProdutos2 (busca: string){
    if (busca === "O Hobbit"){
        return new Livro2 ("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === "Dark Souls"){
        return new Jogo2 ("Dark Souls",1);
    }
    return null
}

const produto3 = buscarProdutos2('Dark Souls');

if(produto3 instanceof Livro){
    console.log(produto3.autor);
}

if(produto3 instanceof Jogo){
    console.log(produto3.nome);
}

if(produto3 instanceof Produto2){
    console.log(produto3.nome);
}

interface Carro {
    nome : string;
}
const honda: Carro = {
    nome: "Honda",
}
