// Sept 18 de 2023: CICLOS -> while, do/while, for

// WHILE: Repetición de instrucciones
let contador = 0;
while (contador < 5) {
  console.log(`WHILE: El valor del contador es ${contador}`);
  contador++;
}

// DO/WHILE: Repetición de instrucciones, al menos ejecuta el ciclo una vez
contador = 0;
do {
  console.log(`DO/WHILE: El valor del contador es: ${contador}`);
  contador++;
} while (contador < 5);

// FOR: Recorrer arreglos (casi siempre)
for (contador = 0; contador < 5; contador++) {
  console.log(`FOR: El valor del contador es: ${contador}`);
}

// EJERCICIO: imprimir los números pares de 1 a 20
console.log("Solución: 1");
let inicio = 0;
let par = 0;
do {
  if (inicio % 2 === 0) {
    console.log(`El número par es: ${inicio}`);
  }
  inicio++;
} while (inicio <= 20);

console.log("Solución: 2");
let inicio1 = 0;
let fin1 = 20;
contador = inicio1;
while (contador <= fin1) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}

console.log("Solución: 3");
contador = inicio1 % 2 === 0 ? inicio1 : inicio1 + 1;
while (contador <= fin1) {
  console.log(contador);
  contador += 2;
}
