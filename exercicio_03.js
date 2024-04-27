/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
  ● Some 25 ao primeiro inteiro;
  ● Triplique o valor do segundo inteiro;
  ● Modifique o valor do terceiro inteiro para 12% do valor original;
  ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
  dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundoo número inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
let num4 = num1 + num2 + num3;

let operacao1 = num1 + 25;
let operacao2 = num2 * 3;
let operacao3 =  0.12 * num3;
let operacao4 = num4;

console.log(`A soma do primeiro inteiro ao 25 é: ${operacao1}`);
console.log(`O triplo do segundo inteiro é: ${operacao2}`);
console.log(`A porcentagem de 12% sobre o terceiro inteiro é: ${operacao3}`);
console.log(`O valor armazenado no quarto inteiro é: ${operacao4}`);