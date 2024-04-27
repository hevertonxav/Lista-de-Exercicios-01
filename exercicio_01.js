/* 
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.

  Exemplo de dados de entrada: 150 (temperatura Celsius)
  Saída para os dados da entrada acima: 302 (temperatura em Fahrenheit)
*/




const prompt = require('prompt-sync')();

let C = parseInt(prompt("Digite a temperaturatura em °C: "));

let F = 1.8 * C + 32;

console.log(`${F} °F`);
