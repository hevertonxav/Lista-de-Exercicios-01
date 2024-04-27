/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
 
  Exemplo de dados de entrada:
     200 (quantidade de eleitores)
     10 (quantidade de votos brancos)
     20 (quantidade de votos nulos)
     160 (quantidade de votos válidos)

  Saída para os dados de entrada acima:
      5 (percentual de votos brancos)
      10 (percentual de votos nulos)
      80 (percentual de votos válidos)
*/



const prompt = require('prompt-sync')();

let qtdeTotalEleitores = parseInt(prompt("Digite a quantidade total de eleitores: "));
let qtdeVotosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let qtdeVotosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let qtdeVotosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

let percentualBrancos = (qtdeVotosBrancos/qtdeTotalEleitores)*100;
let percentualNulos = (qtdeVotosNulos/qtdeTotalEleitores)*100;
let percentualValidos = (qtdeVotosValidos/qtdeTotalEleitores)*100;

console.log();

console.log(`Percentual de votos brancos: ${percentualBrancos} %`);
console.log(`Percentual de votos nulos: ${percentualNulos} %`);
console.log(`Percentual de votos em válidos: ${percentualValidos} %`);