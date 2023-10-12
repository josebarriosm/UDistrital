import { sumar, multiplicar } from "./libreria.js"; // aquí se importan las funciones sumar y multiplicar que se encuentran en el archivo libreria.js
import { DIAS_ANIOS, DIAS_SEMANAS } from "./constantes.js"; // aquí se importan las variables que se encuentran en el archivo constantes.js

const resultadoSuma = sumar(3, 5);
console.log(resultadoSuma);
const resultadoMultiplicar = multiplicar(3, 5);
console.log(resultadoMultiplicar);
const resultadoDIAS = DIAS_ANIOS * DIAS_SEMANAS;
console.log(resultadoDIAS);
