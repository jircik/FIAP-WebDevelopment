//DOM
const titulo = document.getElementById("titulo");

titulo.innerHTML = "o DOM mudou o texto";

titulo.style.color = "red";

const produtos = [
    {nome:"teclado mecanico", preco:300, emPromocao:true},
    {nome:"mouse pad XL", preco:80, emPromocao:true},
    {nome:"mouse pro", preco:200, emPromocao:false},
    {nome:"monitor gamer", preco:2300, emPromocao:false},
]

const container = document.getElementById("listar-produtos");

const mostrarTotal = document.getElementById("resultado-total");


function todosProdutos(lista) {
    mostrarTotal.innerText = "";

    container.innerHTML = lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>' : ''}
        </div>
    `).join('');
}

function filtarPromocoes() {
    const promocionais = produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais);
}

function calcularTotal() {
    const total = produtos.reduce((acc, item)=>{
        return acc + item.preco;
    }, 0);
    mostrarTotal.innerText = `valor total: ${total}`;
}