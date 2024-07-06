
//Hacer un pseudocodigo que imprima los numeros impares hasta el 100 y que imprima cuantos impares hay.

/*
              Estudio Previo
    Los numeros impares van de 2 en 2 empezando en 1, hasta el 99.
    Hace falta un contador que empiece en 1 y aumente de 2 en 2 para que los vaya generando e imprimiendo.
    La condicion de salida del ciclo sera cuando la variable que los genera sea mayor que 100.
    Hay que utilizar otro contador para saber el numero impar que hay; aumentara de 1 en 1.
    Solo debe visualizar su valor cuando termine de imprimir todos los impares ira fuera del ciclo.
*/ 

let c = 1;
let con = 0;
while(c < 100){
  console.log(`EL numero de impares: `, c);
  c = c + 2;
  con = con + 1;
};

