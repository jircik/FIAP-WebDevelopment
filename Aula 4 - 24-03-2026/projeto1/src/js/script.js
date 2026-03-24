//Declarações e variáveis

//var let e cost

var xpto = 10;

console.log(xpto);
xpto = 20;//var permite declarar novamente ou trocar o valor, não gera erro, mas não é uma boa prática
//var xpto = 20; → não gera erro
console.log(xpto);


const xpto2 = 30
console.log(xpto2);
//const xpto2 = 40; → const não permite declarar novamente a variável, nem alterar o valor irá gerar erro

//xpto2 = 50; → gera erro

let xpto3 = 40; // → let permite alterar o valor, mas não permite declarar novamente
//let xpto3 = 60; → gera erro
console.log(xpto3);

xpto3 -= 5; // → não gera erro
console.log(xpto3);

//TypeOf

const exemplo1 = 1;
console.log(typeof exemplo1);

const exemplo2 = "oie";
console.log(typeof exemplo2);

const exemplo3 = 20.5;
console.log(typeof exemplo3);

const exemplo4 = true;
console.log(typeof exemplo4);

const exemplo5 = {nome: "fiap"};
console.log(typeof exemplo5);

const exemplo6 = ["java", "python"];
console.log(typeof exemplo6);

let exemplo7;
console.log(typeof exemplo7);

const exemplo8 = null;
console.log(exemplo8);
console.log(typeof exemplo8);
