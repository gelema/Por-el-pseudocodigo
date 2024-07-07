
//Hacer un pseudocódigo que imprima todos los números naturales que hay desde la unidad hasta un número que introducimos por teclado.

/*
                            Estudio Previo
    Hay que introducir un numero por teclado para lo cual necesitamos una variable.
    Debemos empezar a imprimir los números desde el 1 hasta dicho numero.
    El proceso de la instrucción del numero deber ser:
        Antes del ciclo para saber hasta que numero debemos imprimir.
        Fuera del ciclo, para que solo lo pida una vez. Si estuviera 
        dentro de el cada vez que lo realizara lo estaría pidiendo.
*/

console.log('\t\t #  Programa para sumar dos números\t #');
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout)

/*
//use re.question para hacer una pregunta al usuario y leer su respuesta
rl.question('What is your age ? ', (age) => {
    console.log('Your age is: '+ age);
    rl.close();
    })
    */
   
   /* 
   //use rl.setPrompt para hacer una pregunta al usuario y leer su respuesta
   rl.setPrompt('What is your age? ');
   rl.prompt();
   rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    rl.close();
})
 */

/*
//Pseudocodigo para ver si un numero es para saber si impar
rl.question('Ingresa un número: ', (input) => {
    const numero = parseInt(input);
  
    if (isNaN(numero)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
      } else {
        console.log(`El número ${numero} es impar.`);
      }
    }
  
    rl.close();
  });
*/

/*
  rl.question('Ingresa el primer número: ', (input1) => {
    rl.question('Ingresa el segundo número: ', (input2) => {
      const numero1 = parseInt(input1);
      const numero2 = parseInt(input2);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Por favor, ingresa números válidos.');
      } else {
        const suma = numero1 + numero2;
        console.log(`La suma de ${numero1} y ${numero2} es ${suma}.`);
      }
  
      rl.close();
    });
  });

*/

rl.question('Ingresa un número: ', (input1) => {
    let num2 = 0;
    const num1 = parseInt(input1)
    if(isNaN(num1)){
        console.log('Por favor, ingrese un numero valido.')
    } else {
        while(num2 < num1){
            num2 = num2 + 1;
            console.log(num2)
        }
    }
    rl.close();
})