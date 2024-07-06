
// Hacer un programa que imprima los numeros impares desde el 100 hasta la unidad y calcule su suma.

/*              Estudio Previo
 *    Dentro de un bucle generamos los numeros empezando en el 99, por ser el primer numero impar a imprimir.
 *    Nos apoyamos en un contador decreciente, de 2 en 2, para generar el anterior numero impar. A medida que los generamos
 *    realizamos la suma mediante un sumador.
 *    Fuera del bucle imprimiremos el valor de la suma;
 *
*
*/

let c = 99;
let suma = 0;
while(c > 1){
  console.log(c);
  suma = suma + c;
  c = c - 2;
}
console.log(" La suma de los numeros impares es: ");
console.log(suma)
