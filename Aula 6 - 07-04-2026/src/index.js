// Declarações e Variaveis
//var,let e const
// var xpto=10;
// console.log(xpto);
// var xpto=20;
// console.log(xpto);
//var - pode redeclarar e acessar fora do escopo
//let não pode redeclara e não consegue acessar fora do escopo
// if(true){
//     var nome="Fiap";
// }
//   console.log(nome);

//const
// const taxaJuros =0.85;
// taxaJuros =0.50;
// console.log(taxaJuros);

// var exemplo1="Ola dev var";
// console.log(exemplo1);

// let exemplo2="Ola dev let";
// console.log(exemplo2);

// const exemplo3="ola dev const";
// console.log(typeof exemplo3);

// let exemplo4=20;
// console.log(typeof exemplo4);

// let exemplo5=true;
// console.log(typeof exemplo5);

// let exemplo6={nome:"fiap"};
// console.log(exemplo6);

// let exemplo7=["Java","Python","C#"];
// console.log(typeof exemplo7);
// //variavel indefinida
// let exemplo8;
// console.log(exemplo8);
// //variavel vazia
// let exemplo9=null;
// console.log(exemplo9)

// OPERADORES ARITMÉTICOS

// const valor1=20;
// const valor2=10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// //OPERADORES LÓGICOS

// console.log(valor1 > valor2);
// console.log(valor1 >10 && valor2 != 20);
// console.log(valor2 > 5 || valor1 >50 )

// //OPERADORES DE COMPARAÇÃO
// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// console.log("O valor é:", valor2);

// // exercicio 1

// const p=20;
// const v=10;
// const precoFinal = p-v;
// console.log("O preço final com desconto é:",precoFinal)


// //Cidade
// const usuarioLogado=1;
// const token=100;
// const transacaoAutorizada= usuarioLogado === 1 && token >=10;
// console.log("Transação Autorizada com sucesso", transacaoAutorizada);

//ESTRUTURA CONDICIONAL

//if
// if(false){
//     console.log("é Verdadeiro")
// }

// //if/else

// let nome="Fiap";

// if(nome=="Fiap"){
//     console.log("nome verdadeiro")
// }else{
//     console.log("nome Errado")
// }
// //if encadeado ou aninhado

// let idade=45;

// if(idade <= 13){
//     console.log("é uma criança")
// }else if(idade >13 && idade <=18){
//     console.log("é um adolescente")
// }else if(idade >18 && idade <=59)
//     console.log("é um adulto")
// else{
//     console.log("é um idoso")
// }

// //SWITCH CASE

// let times="brasil";

// switch(times){
//     case "santos":
//         console.log("Um time idoso")
//         break;
//     case "sao paulo":
//         console.log("Time Panetone")
//         break;
//     case "palmeiras":
//         console.log("SEM MUNDIAL")
//         break;
//     case "corinthians":
//         console.log("UM time de tradição")
//         break;
//     default:
//         console.log("é tão ruim quanto a seleção brasileira")
// }

// // ternaria

// let salario=100;
// let resultado = salario ==100 ? "Salario Certo":"SalarioErrado"
// console.log(resultado)

// let usuario="fiap";
// let userLogado= usuario ==="fiap"?"Logado com suceso":"usuario inválido"
// console.log(userLogado);

// function verificarParImpar(numero){
//     return numero % 2 === 0 ?"PAR":"IMPAR";
// }
// console.log(verificarParImpar(10))

//ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

//for - Estrutura de repetição utilizada quando sabemos previamente quantas vezes o código vai ser executado

//declaração, operação, incremento
for(let i=1; i<=5;i++){
    console.log("Numero:",i);
}
// for para array

const linguagens = ["Java","Python","C#","PHP"];

for( let i=0; i < linguagens.length;i++){
    console.log("Linguagem",i ,":", linguagens[i]);
}

const tecnologias =["JS","HTML","CSS"]

for(const tech of tecnologias){
    console.log("Estudando",tech)
}

const carros ={marca:"Volks",modelo:"Fusca",ano:1980};

for( let dados in carros){
    console.log(dados,":",carros[dados])
}

//while -  diferente do for o while não sabemos a quantidade de vezes que o código vai executar

// let i=1;

// while(i <=5){
//     console.log("contagem",i)
//     i++;
// }
//declaração de variavel indefinada
// let numero;

// while(numero !== "0"){
// numero = prompt("Digite ( ou 0 para sair)");
// console.log("eu sei o que você digitou:", numero);
// }
// console.log("Fim do Programa")

// do while (Executa ao menos uma vez)
let contador =10;
do {
    console.log("vai executar pelo menos uma vez")
    contador++;
}while(contador <=5);

//declaração da variavel undefined
let palpite;

//gerar um numero aleatorio entre 1 e 10
const sorteio =Math.floor(Math.random() * 10)+1;

do{
    palpite =parseInt(prompt("Digite um numero entre 1 e 10"));

    if(isNaN(palpite)){
        alert("Saindo do jogo")
        break;
    }
    if(palpite !== sorteio){
        alert("Você Perdeu R$ 100,00")
    }
} while(palpite !== sorteio)
if(palpite === sorteio){
    alert(`Parabéns , você acertou ${palpite} e ganhou R$ 100,00`)
}

