// Hacer un pseudocodigo que imprima los numeros del 100 a 0. en orden decreciente.

/*              Estudio Previo
 *  Necesitamos una variable contador que partiendo de valor 100 se vaya decrementando
 *  en una unidad hasta que valga 0.
 *  La inicializamos a 100 por ser el primero numero que debe imprimir
 *  Utilizamos un bucle para que imprima el valor de la variable y al mismo tiempo vaya
 *  decrementandola en una unidad.
 */

let c = 100; //contador para generar numeros
while (c > 0) {
  console.log(c);
  c = c -1;
}

