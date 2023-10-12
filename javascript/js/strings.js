let frase1 = "Frontend Intermedio";
console.log(frase1);

let frase2 = "I don't know";

let frase3 = 'Él dijo: "Adiós"';
console.log(frase3);

let frase4 = "Primer renglón\nSegundo renglón";

console.log(frase1, frase2, frase3);

let frase5 = "Frontend \tIntermedio \nFrontend \tBásico \nFrontend \tAvanzado\n\n";
console.log(frase5);

// Concatenación
let pelicula = "Star" + "Wars";
console.log(pelicula);

pelicula += ": The Return of the Jedi";
console.log(pelicula);

let year = 1983;
pelicula = pelicula + " - " + year;
console.log(pelicula);

// Convertir string a number
let num1 = "20";
let num2 = "23";

let res1 = num1 + num2;
console.log(res1, typeof res1);

let valor1 = parseInt(num1);
let valor2 = parseInt(num2);
res2 = valor1 + valor2;
console.log(res2, typeof res2);

// Acceder a posiciones del string - los strings son inmutables
let primero = pelicula[0];
console.log(primero);

// longitud total del string
console.log(pelicula.length) 
let ultimo = pelicula[pelicula.length - 1];
console.log(ultimo);

// Templates y literales
let nombre = "Catalina";
let edad = 21;

let mensaje1 = "La estudiante " + nombre + " tiene " + edad + " años";
console.log(mensaje1);

// Back tick
let mensaje2 = `La estudiante ${nombre}
tiene ${edad} años`;
console.log(mensaje2);

let mensaje3 = `El resultado es ${20*2}`;
console.log(mensaje3);