// OCtubre 2 - Desestructuración

// Definición de objetos
let coordenada = {
  latitud: 4, // propiedad o atributo
  longitud: 6, // propiedad o atributo
};

console.log(coordenada);

// Acceso tradicional
let lat = coordenada.latitud;
let long = coordenada.longitud;

console.log(lat);
console.log(long);

// Acceso usando destructuring
const { latitud, longitud } = coordenada;
console.log(latitud);
console.log(longitud);

// Acceso usando destructuring renombrando variables
// propiedad : nuevo nombre
const { latitud: x, longitud: year } = coordenada;
console.log(latitud);
console.log(longitud);

// Definición de objeto
let forecast = {
  today: {
    min: 18,
    max: 22,
  },
  tomorrow: {
    min: 19,
    max: 25,
  },
};

console.log(forecast);

// Destructuring de objetos complejos
const {today: hoy, tomorrow: manana} = forecast;
console.log(hoy, manana);

const {
    tomorrow: {
        max: maxTomorrow
    },
    today: {
        min: minToday
    }
} = forecast;

console.log(maxTomorrow);
console.log(minToday);

const {
    today: hoy2,
    today: { min: minima},
} = forecast;

console.log(hoy2);
console.log(minima);

// Definición de un objeto
const usuario = {
    nombre: "José",
    ciudad: "Bogotá",
    pais: "Colombia",
};

// De forma tradicional
function imprimirUbicacion(usuario)  {
    let ciudad = usuario.ciudad;
    let pais = usuario.pais;    
    console.log(`Imprimir variables de forma normal -> ${ciudad}, ${pais}`);
}
imprimirUbicacion(usuario);

// Con destructuración
function imprimirUbicacion2({ciudad, pais}) {
    console.log(`Imprimir variables con destructuración normal -> ${ciudad}, ${pais}`);
}
imprimirUbicacion2(usuario);

// Con destructuración renombrando variables
function imprimirUbicacion3({ ciudad: city, pais: country }) {
  console.log(`Imprimir variables con destructuración renombrando variables -> ${city}, ${country}`);
}
imprimirUbicacion3(usuario);

// DESTRUCTURING CON ARREGLOS ---------------------

// Definición de un arreglo
const arreglo = [1,2,3,4,5];

// Acceso tradicional con arreglo
const primero = arreglo[0];
const segundo = arreglo[1];

// Acceso con destructuring
const [first, second] = arreglo;
console.log(`valor de la primera posicion: ${first} y valor de la segunda posicion: ${second}`);

const [p1, p2, , , p5] = arreglo;
console.log(
  `valor de la primera posicion: ${p1} y valor de la segunda posicion: ${p2} y el valor de la quinta posición: ${p5}`
);

const [primis, ...resto] = arreglo;
console.log(`El valor del primer arreglo es: ${primis}`);
console.log(`El resto de los valores del arreglo son: ${resto}`);

// Desestructura una cadena de caracteres con split
const nombreCompleto = "José Barrios";
const [nombre, apellido] = nombreCompleto.split(" ");
console.log(nombre);
console.log(apellido);

// Destructuring de datos de retorno de una función
function calcular(numero1, numero2) {
    const suma = numero1 + numero2;
    const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;
    return [suma, resta, multiplicacion, division];
}

// Invoca una función con destructuring para los datos de retorno
const [s, r, m, d] = calcular(3, 9);
console.log(s);
console.log(r);
console.log(m);
console.log(d);