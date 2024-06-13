async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const data = await response.json();
    console.log(data);

    showProduct(data);
}

fetchProduct();

interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}

interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa
    empresaMontadora: Empresa
}

function showProduct(data: {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa
    empresaMontadora: Empresa
}) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>${data.preco}</p>
            <div class="fabricante">
                <h3>Fabricante:
                    ${data.empresaFabricante.nome}
                </h3>
            </div>
                        <div class="montadora">
                <h3>Montadora:
                    ${data.empresaMontadora.nome}
                </h3>
            </div>
            <p>Descrição:${data.descricao}</p>
            <p>Garantia:${data.garantia}</p>
            <p>Seguroi acidente: ${data.seguroAcidentes}</p>
        </div>
    `;
}