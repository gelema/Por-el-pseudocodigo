// Hacer un pseudocodigo que imprima los numeros del 0 - 100.

/*              Estudio Previo
 *  Necesitamos una variable contador que vaya tomando los valores de 0 a 100 de una
 *  formar consecutiva y de uno en uno.
 *  Al tener que imprimir el 0 debemos inicializar a 0.
 *  Hay que utilizar un bucle para que imprima el valor de la variable y al mismo tiempo
 *  vaya aumentando en una cantidad hasta que el ultimo valor visualizado sea 100.
 *
 */


let c = 0; //contador para generar los numeros.
while (c  < 100) {
  console.log(c);
  c = c + 1;
  console.log(c)
}
