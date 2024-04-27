/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let primo = 0;
let numero = 100;

while(primo < 50){

  let divisivel = 0;
  let i = 1;

  while(i <= numero){
    if(numero % i == 0){
      divisivel++;
    }
    i++;
  }

  if(divisivel == 2){
    primo++;
    console.log( primo + "º número primo: " +numero);
  }
  numero++;
}
