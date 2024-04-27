/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/


const prompt = require('prompt-sync')();

let number = parseInt(prompt("Digite um número: "));

while(number > 0){
  if (number % 2 == 0) {
    console.log("ESSE NÚMERO É PAR");
  } else {
    console.log("ESSE NÚMERO É IMPAR");
  } 
  
  number = parseInt(prompt("Digite um número: "));
}

console.log("------ FIM ------");
