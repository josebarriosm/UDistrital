// Definición de la función
function mensaje() {
  console.log("Frontend Intermedio");
}

// Definición de función con parámetros
function mensajeConColor(color) {
  const css = `color: ${color}`;
  console.log("%cFrontend Intermedio", css);
}

/**
 * Muestra un mensaje en la consola del DevTools con un color CSS
 * @param {string} texto Mensaje a mostrar
 * @param {string} color Color CSS
 */
function mensajeTextoColor(texto, color) {
  const css = `color: ${color}; border:1px solid ${color}; padding: 3px; border-radius: 3px`;
  const mensaje = `%c${texto}`;
  console.log(mensaje, css);
}

function botonBgColor(texto, color) {
  const css = `color: white; background: ${color}; padding: 3px; border-radius: 3px`;
  const mensaje = `%c${texto}`;
  console.log(mensaje, css);
}

/**
 * Calcula el área del triangulo dada su base y su altura
 * @param {number} base Base del triangulo
 * @param {number} altura Altura del triangulo
 * @returns
 */
function areaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

function sumar(num1, num2) {
  resultado = num1 + num2;
  return resultado;
}

// Invocar / ejecutar / usar una función
mensaje();

// Invocar / ejecutar / usar una función con parámetros
mensajeConColor("red");
mensajeConColor("yellow");
mensajeConColor("cyan");
mensajeConColor("salmon");

let primerTexto = "Backend";
mensajeTextoColor(primerTexto, "lime");
mensajeTextoColor("Frontend", "orange");
mensajeTextoColor(primerTexto, "#444");

botonBgColor(primerTexto, "black");
botonBgColor("Ojo con este error", "red");

let s = 0;
s = sumar(20, 30);
console.log(s);

console.log(sumar(20, 30));
mensajeTextoColor(sumar(100, 200), "black");

mensajeTextoColor(
  `El área del triangulo es -> ${areaTriangulo(
    10,
    2
  )} y la suma de los números es -> ${sumar(50, 80)}`,
  "red"
);

function areaCirculo(radio) {
  // Validación
  if (radio < 0) return;
  if (radio > 100) return;

  const area = Math.PI * Math.pow(radio, 2); // Math.pow -> eleva la variable radio al número 2
}

// {} -> Definir bloques de código (p.e. for, while, if, function)
// () -> Define los parametros de una función
// [] -> Hace referencia a una posición en un arreglo

let numeros = [10, 20, 30, 40, 50, 60, 70];
let buscado = 100;

//const e = existeValor([10, 20, 30, 40, 50, 60, 70], 30);
const e = existeValor(numeros, buscado);
console.log(e);

function existeValor(arreglo, buscado) {
  let i = 0;
  while (i < numeros.length) {
    if (numeros[i] === buscado) {
      return true;
    }
    i++;
  }
  return false;
}
