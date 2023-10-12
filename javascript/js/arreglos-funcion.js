// Funciones con arreglos

let elementos = [10, 20, 30, 40, 50];

// Verifica si TODOS los elementos del arreglo cumplen con una condición, por ej: que todos los elementos sean mayor que 0 y muestra TRUE o FALSE
let todos = elementos.every((el) => el > 0);
console.log(todos);

// Verifica si ALGUN elemento del arreglo cumple la condición, por ej: que alguno sea mayor a 25 y muestra TRUE o FALSE
let alguno = elementos.some((el) => el > 25);
console.log(alguno);

let notas = [5, 8, 7, 4, 1, 2];
let todospasaron = notas.every((nota) => nota <= 3);
console.log(todospasaron);

let contador = 0;
elementos.forEach((el) => {
  if (el > 0) {
    contador++;
  }
});
if (contador === elementos.length) {
  console.log("TODOS");
}

// Filtra los elementos de un arreglo y retorna un arreglo
let filtrados = elementos.filter((datos) => datos > 25);
console.log(filtrados);

// Imprime un array con los datos que sean diferentes al número 30
let diferente = elementos.filter((datos) => datos !== 30);
console.log(diferente);

//  Imprime un array con los datos que sean mayor o igual a 20 y que sean menores a 45
let sinEliminar = elementos.filter((datos) => datos >= 20 && datos < 45);
console.log(sinEliminar);
