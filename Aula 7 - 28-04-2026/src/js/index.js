const email="                   oarthurjircik@gmail.com             ";
const emailLimpo = email.trim(); //remove os espaços do início e fim

console.log(emailLimpo);

if(emailLimpo.includes("@")){ //verifica se o caractere existe na string
    console.log("Email Valido");
} else {
    console.log("Email invalido");
}


const tituloArtigo = "Como aprender Java RAIZ";

const texto1 = tituloArtigo.toUpperCase();
console.log(texto1);

const texto2 = tituloArtigo.split(" "); //divide a string em um array a cada ocorrencia do caractere selecionado
console.log(texto2);

const texto3 = texto2.join(" "); //junta um string[] em uma string separando os indices pelo caractere selecionado



const precoProduto = 199.99;
const desconto = 0.15;

const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`); //limita os decimais a quantas casas forem selecionadas