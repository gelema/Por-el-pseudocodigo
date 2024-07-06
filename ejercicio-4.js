
// Hacer un programa que imprima la suma de los 100 primeros numeros.

/*
              Estudio Previo
    La mision a realizar es doble: por un lado, hay que generar los numeros naturales y por otro,
    a medida que se genera se suman.
    Para la primera operacion necesitamos un contador que aumenta de uno en uno, y para la segunda, 
    un sumador que vaya realizando la suma del numero generado. Todo dentro de un bucle que vaya de 1 a 100.
    La impresion de la suma se realiza fuera del bucle y una vez realizada la misma, porque solamente hay que 
    imprimir el resultado final y no los distintos resultados intemedios.
*/ 

let c = 1;
let sum = 0;
while (c < 100) {
  sum = sum + c;
  c = c + 1;
}

console.log(`La suma de los 100 primeros numeros es: ${c}.`);

/*
                Estudio Previo
    La mision a realiar es doble: por un lado, hay que generar los numeros naturales y, por otro,
    a medida que se generan se suman.
    Para la primera operacino necesitamos un contador que aumenta de uno a uno, y para la segunda, 
    un sumador que vaya realizando la suma del numero generado. Todo dentro de bucle que vaya de 1 a 100.
    La impresion de la suma se realiza fuera del bucle y una vez realizada la misma, porque solamente hay
    que imprimir el resultado final y no los distintos resultados intermedios.
*/
