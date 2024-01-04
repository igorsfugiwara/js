document.addEventListener("DOMContentLoaded", function () {
    // (o código aqui será executado após o carregamento da página)

    // ... o código anterior permanece inalterado ...

    function createCardElement(card) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const imageElement = document.createElement("img");
        imageElement.classList.add("card__image");
        imageElement.src = card.imagem;
        imageElement.alt = card.nome;

        const titleElement = document.createElement("p");
        titleElement.classList.add("card__title");
        titleElement.textContent = card.nome;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("description");
        descriptionElement.textContent = `ID: ${card.id}, Altura: ${card.altura}, Peso: ${card.peso}, Movimentos: ${card.qtdMovimentos}`;

        const priceElement = document.createElement("p");
        priceElement.classList.add("price");
        priceElement.innerHTML = `
            <span class="price__was">ID: ${card.id}</span>
            <span class="price__is">Altura: ${card.altura}</span>
        `;

        const buttonElement = document.createElement("button");
        buttonElement.classList.add("add-product");
        buttonElement.textContent = "Adicionar Produto";

        cardElement.appendChild(imageElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(descriptionElement);
        cardElement.appendChild(priceElement);
        cardElement.appendChild(buttonElement);

        return cardElement;
    }
    function renderHand(player, containerId) {
        const container = document.getElementById(containerId);

        player.hand.forEach((card) => {
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        });
    }

    // Renderizar as mãos dos jogadores nos containers específicos
    renderHand(player1, "player1-container");
    renderHand(player2, "player2-container");
});