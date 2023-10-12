// Oct 03/10/2023

// Declaración de variables de tipos básicos
let edad: number;
let nombre: string;
let esAdulto: boolean;

// Asignación de valor
edad = 1;
console.log(edad, typeof edad);

nombre = "Jose";
console.log(nombre, typeof nombre);

esAdulto = true;
console.log(esAdulto, typeof esAdulto);

// Tipo Unión: permite varios tipos de datos
let identificador: string | number;
identificador = 2;
console.log(identificador, typeof identificador);

identificador = "123";
console.log(identificador, typeof identificador);

// Alias: 
type StringOrNumber = string | number;
let variable: StringOrNumber;
variable = 200;
console.log(variable, typeof variable);

variable = "200";
console.log(variable, typeof variable);

// Arreglo con alias
let arreglo: StringOrNumber[];

// Propiedad de objeto con alias
let objeto: {
    propiedad: StringOrNumber;
};

// Función con parametro alias
const funcion = (parametro:StringOrNumber) => {
    console.log(parametro);    
}