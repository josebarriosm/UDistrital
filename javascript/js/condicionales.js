// Sept 14 de 2023: CONDICIONALES -> if

let x = 4;

if (x > 3) {
  console.log("Entró al if 1");
}

if (x === 4) {
  console.log("Entró al if 2");
}
if (x <= 10) {
  console.log("Entró al if 3");
  let y = 5;
  if (y >= 5) {
    console.log("Entró al if interno 4");
  }
}

let edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// n opciones -> if/else if
let dia = 3;
if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else {
  console.log("No es lunes, ni martes, ni miércoles");
}

// Septiembre 15
// EJERCICIO
// Dada una variable edad, mostrar por consola los siguientes datos:
// No ha nacido, si la edad es 0
// Niño, si la edad esta entre 1 y 10
// Adolescente, si la edad esta entre 11 y 17
// Adulto, si la edad esta entre 18 y 69
// Tercera edad, si la edad es mayor a 70
// Si no es ninguna de las edades mostrar error

let age = 21;
const t0 = performance.now();

if (age < 0) {
  console.log("La edad no es válida");
} else if (age === 0) {
  console.log("No ha nacido");
} else if (age >= 1 && age <= 10) {
  console.log("Niño");
} else if (age >= 11 && age <= 17) {
  console.log("Adolescente");
} else if (age >= 18 && age <= 69) {
  console.log("Adulto");
} else if (age >= 70 && age <= 120) {
  console.log("Anciano");
} else {
  console.log("La edad de la persona es muy largaaaa.");
}
const t1 = performance.now();
console.log(`Algoritmo ejecutado en ${t1 - t0}`);

// Expresión ternaria
let mensaje2 = age > 18 ? "Adulto" : "Menor de edad";
console.log(mensaje2);

// Switch
const lunes = 1;
const martes = 2;
const miercoles = 3;
const jueves = 4;
const viernes = 5;

dia = 1;
switch (dia) {
  case lunes:
    console.log("Lunes");
    break;
  case martes:
    console.log("Martes");
    break;
  case miercoles:
    console.log("Miércoles");
    break;
  case jueves:
    console.log("Jueves");
    break;
  case viernes:
    console.log("Viernes");
    break;
  default:
    console.log("No es un día laboral");
    break;
}

// Ciclos
// 1. Inicialización
// 2. Evalucación de la expresión booleana
// 3. Instrucciones
// 4. Instrucción de rompimiento

// Repetición de instrucciones -> While

let contador = 1;
while (contador <= 3) {
  console.log(`El valor del contador es ${contador}`);
  if (contador === 3) {
    console.log("Se terminó la ejecución");
  }
  contador++;
}
