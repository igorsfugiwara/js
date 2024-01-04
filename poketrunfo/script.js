document.addEventListener("DOMContentLoaded", function () {
    let player1 = {hand: []};
    let player2 = {hand: []};

    const pokemons = fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");

    pokemons
        .then((r) => r.json())
        .then((body) => {
            const result = body.results;
            const requests = result.map((element) => {
                return fetch(element.url)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const card = {
                            nome: data.name,
                            peso: data.weight,
                            altura: data.height,
                            imagem: data.sprites.front_default,
                            qtdMovimentos: data.moves.length,
                            id: data.id
                        };
                        return {
                            [element.name]: card
                        };
                    })
                    .catch((error) => {
                        console.error(`Erro na requisição para ${element.url}:`, error);
                    });
            });

            // Usar Promise.all para aguardar todas as requisições concluírem
            return Promise.all(requests);
        })
        .then((responses) => {
            const gamersDeck = shuffle(responses);

            gamersDeck.forEach((card, index) => {
                if (index % 2 === 0) {
                    player1.hand.push(card);
                } else {
                    player2.hand.push(card);
                }
            });

            console.log("Cartas do Jogador 1:", player1.hand);
            console.log("Cartas do Jogador 2:", player2.hand);

            // Renderizar as mãos dos jogadores nos containers específicos
            renderHand(player1, "player1-container");
            renderHand(player2, "player2-container");
        })
        .catch((error) => {
            console.error('Erro na requisição principal:', error);
        });

    function renderHand(player, containerId) {
        const container = document.getElementById(containerId);

        if (container) {
            player.hand.forEach((card) => {
                const cardElement = createCardElement(card);
                container.appendChild(cardElement);
            });
        }
    }

    // Função para criar um elemento HTML representando uma carta
    function createCardElement(card) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        console.log(card);
        for (const key in card) {
            // Adiciona títutlo com o nome do Pokémon
            const titleElement = document.createElement("p");
            titleElement.classList.add("card__title");
            titleElement.textContent = card[key].nome.toUpperCase();
            // Adiciona a imagem do Pokémon
            const imageElement = document.createElement("img");
            imageElement.classList.add("card__image");
            imageElement.src = card[key].imagem;
            imageElement.alt = card[key].nome;
            // Adiciona o ID do Pokémon ao atributos
            const idElement = document.createElement("p");
            idElement.classList.add("id");
            idElement.textContent = `ID: ${card[key].id}`;
            // Adicione o ID do Pokémon como um atributo de dados
            idElement.dataset.pokemonId = card[key].id;

            const attributesElement = document.createElement("div");
            attributesElement.classList.add("card__attributes");

            const weightElement = document.createElement("p");
            weightElement.classList.add("weight");
            weightElement.textContent = `Peso: ${card[key].peso/10}kg`;

            const heightElement = document.createElement("p");
            heightElement.classList.add("height");
            heightElement.textContent = `Altura: ${card[key].altura/10}m`;

            const movesElement = document.createElement("p");
            movesElement.classList.add("moves");
            movesElement.textContent = `Quantidade de Ataques: ${card[key].qtdMovimentos}`;

            cardElement.appendChild(imageElement);
            cardElement.appendChild(titleElement);
            cardElement.appendChild(attributesElement);
            attributesElement.appendChild(idElement);
            attributesElement.appendChild(heightElement);
            attributesElement.appendChild(weightElement);
            attributesElement.appendChild(movesElement);


            // Adiciona um ouvinte de eventos de clique ao elemento ID
            idElement.addEventListener("click", function () {
                comparePokemon(card[key].id);
            });
            // Adiciona um ouvinte de eventos de clique ao elemento altura
            heightElement.addEventListener("click", function () {
                compareAttribute("altura", card[key].altura);
            }); // Adiciona um ouvinte de eventos de clique ao elemento peso
            weightElement.addEventListener("click", function () {
                compareAttribute("altura", card[key].peso);
            }); // Adiciona um ouvinte de eventos de clique ao elemento quantidade de movimentos
            movesElement.addEventListener("click", function () {
                compareAttribute("altura", card[key].qtdMovimentos);
            });
        }

        return cardElement;
    }

    function comparePokemon(pokemonId) {
        console.log(`Pokémon com ID ${pokemonId} foi clicado!`);
        // Implemente a lógica de comparação aqui
    }
    // Função para comparar atributos clicáveis
    function compareAttribute(attributeName, attributeValue) {
        console.log(`Atributo ${attributeName} clicado com valor ${attributeValue}`);
        // Implemente a lógica de comparação aqui
    }
    // Função para rembaralhar as cartas
    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

});