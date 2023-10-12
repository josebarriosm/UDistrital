// 04/10/2023

// **************** ARREGLOS EN TYPESCRIPT ----------------------

// ------------ Tipos Implicitos ----------------------
// Declaración del arreglo
let heroes = ["superman", "batman", "aquaman"];

// No permite asignación de tipos distintos
// heroes.push(10); /* Esto genera error */
heroes.push("Wonder Woman");
heroes[0] = "The Flash";

// Inicialización del arreglo con tipo String y Number
let notas = ["Catalina", 3.5, "Valeria", 4.5, "Luciana", 4];
notas.push(2);
notas.push("Emilio");
//notas.push(true); /*Genera error*/ */

// ------------ TIPOS EXPLICITOS ----------------------
let juegos: string[] = [];
juegos.push("Super Mario");
//juegos.push(3); /* Esto genera error porque no es posible asignarle un número a un array string*/

// Declaración de arreglo con Union
let grades: (string | number)[] = [];
grades.push("Martha");
grades.push(20);
//grades.push(true); /* Genera un error*/

let mutante: string | number | boolean;
mutante = "abc";
mutante = 2;
console.log(mutante);

let mezcla: (string | number | boolean)[] = [];
mezcla.push("abc");
mezcla.push(2);
console.log(mezcla);

// **************** TUPLAS ----------------------

// En esta declaración de la Tupla se deben respetar los tipos de valores de acuerdo al orden establecido y el número de posiciones
let tup: [string, number, boolean] = ["Maria", 22, true]; 

// Modifica todo el arreglo
tup = ["Valeria", 10, true];
//tup = ["Luciana", true, true]; /** Genera error porque en la segunda posición debe ir un número */

// Modifica una posición del arreglo
tup[0] = "Emilio";
tup[1] = 13;
//tup[0] = true; /** Genera error porque la posición 0 solo acepta string de acuerdo a la declaración del arreglo */

let tup2: [boolean, number] = [true, 10];

// Permite agregar tipos de datos válidos según la definición
tup2.push(false);
tup2.push(20);
tup2.push(100);
tup2.push(200);
console.log(tup2);
