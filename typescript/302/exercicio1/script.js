// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
var elements = document.querySelectorAll('.link');
var elementArray = Array.from(elements);
elementArray.forEach(function (element) {
    if (element instanceof HTMLElement) {
        element.style.color = createColor();
        element.style.borderColor = createColor();
    }
});
function randomNumber() {
    return Math.round(Math.random() * 255);
}
function createColor() {
    return "rgb(".concat(randomNumber(), ",").concat(randomNumber(), ",").concat(randomNumber(), ")");
}
randomNumber();
