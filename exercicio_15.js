/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/


const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número decimal: "));
let peso;
let soma = 0;
let somaPesos = 0;

while(numero != 0){
  peso = parseInt(prompt("Digite o peso desse número: "));
  soma += numero * peso
  somaPesos += peso;
  numero = parseFloat(prompt("Digite um número decimal: "));
}

let mediaPonderada = soma/somaPesos;

console.log(`Média Ponderada: ${mediaPonderada}`);
