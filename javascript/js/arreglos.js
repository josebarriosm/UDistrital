// Sept 18 de 2023: Arreglos y Spread operators

// Declaración de arreglos (listas)
let elementos1 = []; // arreglo vacío
let elementos2 = [10, 20, 30]; //arreglo con elementos
let elementos3 = ["uno", 50, 3.1416, true]; //varios tipos

console.log(elementos1, elementos1.length);
console.log(elementos1, elementos2.length);
console.log(elementos1, elementos3.length);

// Acceso a través del índice - cardinal - de posición
console.log(elementos3[1]);
const variable1 = elementos3[2];
console.log(variable1);

if (typeof elementos3[5] === "undefined") {
  console.log("No esta definido");
} else {
  console.log(elementos3[5]);
}

// Modifica el valor de una posición del arreglo
elementos3[0] = "one";
console.log(elementos3);

// Modifica una posición que no existe y agrega elementos undefined para rellenar los datos faltantes
elementos3[10] = 23;
console.log(elementos3);
console.log(elementos3[4]);
console.log(elementos3.length);

let notas1 = [10, 20, 30]; // Declaración de arreglo 1
let notas2 = notas1; // pareciera ser una "copia" pero no, porque en teoría es una variable apuntando a una misma variable en memoria
notas2[0] = 100; // Modifica la "copia"
console.log(notas1);
console.log(notas2);

// Spread operator: toma los elementos de un arreglo para crear un nuevo arreglo, se crea una copia
let notas3 = [100, 200, 300];
let notas4 = [...notas3]; // con los tres puntos se genera una copia del original con spread operator
notas4[0] = 3000;
console.log(notas3);
console.log(notas4);

let notas5 = notas3.slice(); // genera una copia con la función slice
notas5[0] = 5000;
console.log(notas5);

let mensaje = "La casa es bonita";
let palabras = mensaje.split(" ");
console.log(palabras);
console.log(`La palabra de la posición 4 es: ${palabras[3]}`);

// 19/09/2023 ---------------------------------------------------------

let Element = [10, 20, 30];

// Agregar un elemento al inicio a Element
Element.unshift(50);
console.log(Element);

//Agregar un elemento al final de Element
Element.push(80);
console.log(Element);

//Eliminar el primer elemento *****************************

//Eliminar un elemento dada una posición *****************************

// OTRAS FUNCIONES
let ele2 = [1_000, 2_000];
let respuestas1 = Element.concat(ele2);
console.log(Element);
console.log(ele2);
console.log(respuestas1);

// Genera una cadena de caracteres con un delimitador
let respuestas2 = respuestas1.join();
console.log(respuestas2);
console.log(typeof respuestas2);
let respuestas3 = respuestas1.join("+");
console.log(respuestas3);

// indexOf -> Obtener la posición (índice) de un elemento en el arreglo
let posicion1 = respuestas1.indexOf(1_000);
console.log(respuestas1, "El número 1000 está en la posición: " + posicion1);

// indexOf -> En caso de que el elemento: 20 esté repetido, obtiene la primera posición; si no esta el elemento: 20 el resultado es -1
// debugger; // palabra reservada que permite depurar el código
let One = [10, 20, 30, 40, 20, 60];
console.log(One);
let posicionOne = One.indexOf(50);
console.log(posicionOne);
if (posicionOne === -1) {
  console.log(
    "%cNo se encontró el elemento",
    "background-color:red; color:white; padding:5px; border-radius:5px;"
  );
}

// lastIndexOf -> En caso de que estén repetidos, obtiene la última posición del elemento: 20
let Two = [10, 20, 30, 40, 20, 90, 100];
console.log(Two);
let posicionTwo = Two.lastIndexOf(20);
console.log(posicionTwo);

// Obtiene TODAS las posiciones del elemento: 20 en un arreglo
let posiciones = [];
for (let index = 0; index < Two.length; index++) {
  if (Two[index] === 20) {
    posiciones.push(index);
  }
}
console.log(Two);
console.log(posiciones);

let elements = [10, 20, 30, 40, 50];

// Aplica una función a cada elemento del arreglo generando un valor
let acumulador = 0;
for (let index = 0; index < elements.length; index++) {
  acumulador += elements[index];
}
console.log(acumulador);

let suma = elements.reduce((x, y) => x + y); // ES6
console.log(suma);

// Aplica una función a cada elemento generando un nuevo arreglo
let res2 = elements.map((elemento) => elemento * 2);
console.log(elements);
console.log(res2);

let notas = [2, 4, 4.1, 1.2, 2.5, 5, 0.5, 2.8];
let curva = notas.map((nota) => (nota < 3 ? nota + 0.2 : nota)); // esta expresión ternaria le suma 0.2 a las notas menore de 3 con el map
console.log(notas);
console.log(curva);

const verificacion = (nota) => (nota < 3 ? nota + 0.2 : nota);
function verificacion2(nota) {
  if (nota < 3) {
    return nota + 0.2;
  } else {
    return nota;
  }
}
let grades = [2, 4, 4.1, 1.2, 2.5, 5, 0.5, 2.8];
let curve = grades.map(verificacion); // esta expresión ternaria le suma 0.2 a las notas menore de 3 con el map
console.log(grades);
console.log(curve);

// ordenar un arreglo con sort.
let ordenadas = curva.sort();
console.log(ordenadas);

// 20/09/2023 ---------------------------------------------------------

// Recorre un arreglo con WHILE
let datos = [100, 200, 300, 400];
let contador = 0;
while (contador < datos.length) {
  console.log(datos[contador]);
  contador++;
}

// Recorrer un arreglo con FOR
for (let index = 0; index < datos.length; index++) {
  console.log(datos[index]);
}

// Recorrer un arreglo con la función FOREACH
datos.forEach((datos) => console.log(datos)); // Esta es una función anonima que tiene el parametro la flechita y una instrucción

// Si son varias instrucciones se deben colocar dentro de un corchete
datos.forEach((datos) => {
  console.log("Este es un dato");
  console.log(datos);
});

// Recorre un arreglo con "for of"
for (const elemento of datos) {
  console.log(elemento);
}

// Recorre un arreglo con "for in"
for (const key in datos) {
  console.log(datos[key]);
}

// Recorre un arreglo con "for in" e imprime el índice de cada elemento, es decir, la posición con la variable "key"
for (const key in datos) {
  console.log(key);
}
