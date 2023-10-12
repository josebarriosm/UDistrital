// 04/10/2023

// ********** FUNCIONES --------------------

/**
 * Calcula el área del círculo dado su radio
 * @param radio Radio del círculo
 * @returns Área del círculo
 */
const areaCirculo = (radio: number): number => {
  //return "abc"; // Esto genera un error porque la función esta definida para que retorne un número
  return Math.PI * Math.pow(radio, 2); // pow: es una función fija que eleva al cuadrado
};

// Se deben proveer los argumentos acorde a los tipos de datos de la función
let a1 = areaCirculo(3);

//let a2: string = areaCirculo(5); /** Esto genera un error porque typescript ya sabe que el resultado es un número */

const mensaje1 = (numero1: number, numero2: number | string) => {
  console.log(numero1);
  console.log(numero2);
};
// Parametros de tipo Union
mensaje1(20, "hello");

// Parámetros con valor por default
const mensaje2 = (parametro1: number = 10) => {
  console.log(parametro1);
};
// Valor explícito para el parámetro
mensaje2(10);
// El argumento toma el valor por defecto
mensaje2();

// Parametro opcional en el último dato con el simbolo ? pero definido como número
const mensaje3 = (numero1: number, numero2?: number) => {
  console.log(numero1);
  console.log(numero2);
};

mensaje3(10, 20);
mensaje3(100);

// Función con un valor por defecto para el segundo parámetro y puede ser de dos tipos: string o number
const mensaje4 = (numero1: number, numero2: string | number = "abc") => {
    console.log(numero1);
    console.log(numero2);    
}

mensaje4(1000, 2000);
mensaje4(1000, "hello");
mensaje4(1000);

// Función con parámetro opcional de tipo string o number
const mensaje5 = (numero1: number, numero2?: string | number) => {
  console.log(numero1);
  console.log(numero2);
  if (typeof numero2 === "undefined") {
    console.log("???");    
  } else {
    console.log(numero2);    
  }
};

mensaje5(100, 100);
mensaje5(200, "200");
mensaje5(300);