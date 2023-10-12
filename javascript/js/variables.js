// ES6 - ECMAScript 6

// Declaración de variables antes de ES6
var nombre = "Cata";
console.log(nombre);

// H1 - DECLARACION DE VARIABLES CON ES6
let apellido = "Barrios";
console.log(apellido);

if (nombre == "Cata") {
    var num1 = 5; // var tiene un alcance = scope global pero no se recomienda usar de este
    let num2 = 6; // let tiene un alcance = scope local
    console.log(num2);
}
console.log(num1); // x esta declarada con var lo que la hace global en el script - var consume mucha memoria
//console.log(y); -> no es correcto llamar la variable: 'y' aquí ya que es una variable declarada con let que solo aplica para el bloque donde esta declarada - let no consume mucha memoria
let booleano = true;

// typeof = obtiene el tipo de datos de la variable
console.log(nombre + " es de tipo: "+ typeof nombre);
console.log(booleano + " es de tipo: " + typeof booleano);

// H2 - Declaración de variable constante que es de tipo inmutable
const diasSemana = 7; // Las constantes no se les puede cambiar de valor durante todo el script

// Javascript tiene datos de variables dinámicos
let variable = "Javascript";
console.log(variable + " declarada con el nombre: variable, es de tipo: " + typeof variable);
variable = 400; // cuando se le va a asignar un nuevo dato no se vuelve a declarar con let
console.log(variable + " declarada con el nombre: variable, es de tipo: " + typeof variable
);