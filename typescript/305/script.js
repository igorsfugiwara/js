var _a, _b, _c;
// ============================================
// Functions
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4, 4);
var subitrair = function (a, b) { return a - b; };
subitrair(3, 4);
// ============================================
// Void
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
console.log(pintarTela('black'));
var btn = document.querySelector('button');
btn === null || btn === void 0 ? void 0 : btn.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
isString('teste');
// isString(200); // erro no ts
// ============================================
// Never
function abortar(mensagem) {
    throw new Error(mensagem);
}
// comentar se nao o thown error para a excecução
// abortar('Ocorreu um erro 666')
console.log("tente novamente");
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor == 'string') {
        return valor.trim().toLocaleLowerCase();
    }
    else {
        return valor.map(function (item) { return item.trim().toLocaleLowerCase(); });
    }
}
console.log(normalizar("    Produto  "));
console.log(normalizar(["Banana", "UVA    ", " maÇã"]));
function $(seletor) {
    return document.querySelector(seletor);
}
(_a = $("a")) === null || _a === void 0 ? void 0 : _a.href;
(_b = $("video")) === null || _b === void 0 ? void 0 : _b.volume;
(_c = $(".teste")) === null || _c === void 0 ? void 0 : _c.innerHTML;
