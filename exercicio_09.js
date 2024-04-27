/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:

|Código de Origem |    Região        |
|      1          |     Sul          |
|      2          |     Norte        |
|      3          |     Leste        |
|      4          |     Oeste        |
|      5 ou 6     |     Nordeste     |
|      10 até 20  |     Centro-Oeste |
|      25 até 50  |     Nordeste     |
|Fora do Intervalo|Produto importado |
*/

const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código de origem do produto: "));

switch(codigo){
  case 1: 
    console.log("Sul");
    break;
  case 2: 
    console.log("Norte");
    break;
  case 3: 
    console.log("Leste");
    break;
  case 4: 
    console.log("Oeste");
    break;
  case 7: case 8: case 9:
    console.log("Sudeste");
    break;
}

if(codigo >= 10 && codigo <= 20){
  console.log("Centro-Oeste");
} else  if ((codigo >= 25 && codigo <= 50) || (codigo >= 5 && codigo <= 6)){
  console.log("Nordeste");
} else {
  console.log("Produto importado");
}
  
