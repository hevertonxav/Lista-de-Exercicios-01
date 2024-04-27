/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número decimal: "));
let soma = 0;
let i = 0;

while(numero != 0){
  soma += numero;
  i++;
  numero = parseFloat(prompt("Digite um número decimal: "));
}

let media = soma/i;

console.log(`Média: ${media}`);