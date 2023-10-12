// 29/09/2023

// Clases: definición de un objeto y
// Objeto: es una variable con una estructura (clase)

// Las variables, atributos, métodos, funciones se escriben en camelCase, por ej: let datoUsuario = 0;
// Las Constantes se escriben todo en mayúsculas, por ej: const DIAS_SEMANAS = 7;
// Las clases se escriben con la primera en mayúscula, por ej: class Usuario {}

// Definición de clase
class Usuario {
  ciudad = "Bogotá"; // se pueden tener Propiedades por defecto y se declaran por fuera del constructor
  constructor(nombre, apellido, edad) {
    // el constructor me permite recibir los datos de un objeto
    this.nombre = nombre; // esta es una propiedad o atributo
    this.apellido = apellido;
    this.edad = edad;
  }
}

// Instanciación de objetos
let usuario1 = new Usuario("Jose", "Barrios", 45);
console.log(usuario1);

let usuario2 = new Usuario("Claudia", "Lardelli", 51);
console.log(usuario2);

// modificación del dato de una Propiedad
usuario2.edad = 52;
console.log(usuario2);

// Obtener el valor de una Propiedad
console.log(usuario1.nombre);

class Triangulo {
  // Estas propiedades se declaran por fuera del constructor para que sean privadas
  #area;
  #base;
  #altura;

  constructor(base, altura) {
    this.#base = base;
    this.#altura = altura;
    this.#calcularArea();
  }
  // Se declara una función privada para calcular área
  #calcularArea() {
    this.#area = (this.#base * this.#altura) / 2;
  }

  // setters- con set - se declara un setter para la altura y la base para que se puedan modificar
  set altura(altura) {
    this.#altura = altura;
    this.#calcularArea();
  }
  set base(base) {
    this.#base = base;
    this.#calcularArea();
  }
  // con get - se declaran para obtener los valores de las variables
  get base() {
    return this.#base;
  }
  get altura() {
    return this.#altura;
  }
  get area() {
    return this.#area;
  }
}

let triangulo1 = new Triangulo(10, 2);
console.log(triangulo1);
// Uso de setters: set -> modificar el valor de una propiedad
triangulo1.altura = 2;
triangulo1.base = 8;
// Uso de getters: get -> para obtener el valor de las variables
console.log(
  `Para un triangulo de base ${triangulo1.base} y altura ${triangulo1.altura}, su área será ${triangulo1.area}`
);

class Song {
  constructor(artist, title, year) {
    this.artist = artist;
    this.title = title;
    this.year = year;
  }
}

// Creación de objetos
const song1 = new Song("ACDC", "Back in black", 1980);
const song2 = new Song("Guns and Roses", "Welcome to the jungle", 1991);
const song3 = new Song("Metallica", "Whisky in the jar", 1998);

// Agregar objetos a un arreglo
let collections = [];
collections.push(song1);
collections.push(song2);
collections.push(song3);

console.table(collections);
// Acceso a un atributo de un objeto en un arreglo
console.log(collections[1].title);

// Recorre un arreglo de objetos con forEach y función anónima con array arrow =>
collections.forEach((cancion) => {
  console.log(
    `${cancion.title} fue grabada en ${cancion.year} por ${cancion.artist}`
  );
});

function printSong(song) {
  console.log(`${song.title} was recorded in ${song.year} by ${song.artist}`);
}
// Recorre un arreglo de objetos con forEach y función declarada
collections.forEach(printSong);
