/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite a quantidade de maçãs: "));
let precoMacaUnidade;

if(n < 12){
  precoMacaUnidade = 0.3;
} else {
  precoMacaUnidade = 0.25;
}

let valorTotal = n * precoMacaUnidade;

console.log(`Valor total: R$ ${valorTotal}`)