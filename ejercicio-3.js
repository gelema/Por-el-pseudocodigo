
// Ejercicio 3
// Hacer un pseudocodigo que imprima los numeros pares entre 0 y 100.

/*            Estudio Previo
 *  Los numeros pares van de 2 en 2. Ademas empiezan en 2. Por tanto necesitaremos un 
 *  contador que empiece en 2 y aumentando en dicha cantidad. Este proceso debe realizarlo hasta
 *  que imprime el valor 100.
 */ 

let c = 2; //contador que genera los numeros pares 
while (c < 101) {
  console.log(c)
  c = c + 2;
}

/*                Comprobacion
*   Al ser c < 100 entro en el ciclo, imprime c, que vale 2, e incrementa su valor aen 2, ahora 
*   c = 4. Va a comprobar de nuevo la condicion 4 < 100 se cumple: entre de nuevo
*   Cuando c = 100, comprueba  100 < 101 si entra e imprime 100 y le aumenta 2,
*   c = 102. Vuelve a comprobar 102 < 101 no, no entra en el ciclo.
*   Se encuentra con el final del programa y finaliza.
*/ 
