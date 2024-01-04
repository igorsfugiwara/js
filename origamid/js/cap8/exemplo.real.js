console.log("//--------------------------EXEMPLO REAL"); // Aula 802 - Factory Function// EXEMPLO REAL
function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(elements => {
            elements.style.display = 'none';
        });
        return $$(selectedElements) //importante pra encadear metodos e não retornar undefined
    }

    function show() {
        elements.forEach(elements => {
            elements.style.display = 'initial';
        });
        return $$(selectedElements) //importante pra encadear metodos e não retornar undefined
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return $$(selectedElements) //importante pra encadear metodos e não retornar undefined
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return $$(selectedElements) //importante
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return $$(selectedElements) //importante
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}



const btns = $$('button');
console.log(btns.hide().show());

// função para exibir o elemento clicado
function handleClick(event){
    console.log(event.target);
    btns.addClass('active');

}


btns.on('click', handleClick);