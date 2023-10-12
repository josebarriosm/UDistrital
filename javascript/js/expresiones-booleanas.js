// Sept 14 de 2023: Expresiones booleanas -> true o false, mayor, igual, menor 

// Mayor >
let res1 = 5 > 5;
console.log(res1);
console.log("5 > 5 :", 5 > 5);
// Mayor o igual >=
console.log("5 >= 5 :", 5 >= 5);
// Menor <
console.log("5 < 5 :", 5 < 5);
// Menor o igual <=
console.log("5 <= 5 :", 5 <= 5);
// Igual ===
console.log("5 = 5 :", 5 == 5);
// Esto no debería ocurrir
console.log('5 == "5"', 5 == "5");
// Igual teniendo en cuenta el tipo de dato - es mejor utilizar este operador triple
console.log('5 === "5"', 5 === "5");
// Diferente !===
console.log("5 != 5", 5 != 5);
console.log('5 !== "5"', 5 !== "5"); // es mejor utilizar este operador triple
// Negación con el símbolo !
console.log(true);
console.log(!true); // el signo de admiración lo vuelve false
console.log(false);
console.log(!false); // el signo de admiración lo vuelve true

// Operadores lógicos
// T && T -> T
// T && F -> F
// F && T -> F
// F && F -> F
// AND -> && (doble ampersand) -> Todas deben ser verdaderas
console.log(5 === 5 && 6 !== 7);
console.log(4 > 6 && 5 === 5);

// OR -> || (doble pipe) -> Al menos una debe ser verdadera
// T || T -> T
// T || F -> T
// F || T -> T
// F || F -> F
console.log(5 === 5 || 4 === 4);
console.log(5 === 6 || 4 === 4);
console.log(5 === 6 || 10 === 11);
