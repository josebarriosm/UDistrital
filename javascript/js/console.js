// Sept 14 de 2023: CONSOLE.LOG

console.log(20 / 3);
let alerta = "Este no es un valor válido";
console.log(
  "%cAlerta",
  "background-color:red; color:white; padding:5px; border-radius:5px;",
  alerta
);

console.error("Hubo un error");
console.warn("Ojo que esto esta raro");
const arreglo = [
  { nombre: "José", apellido: "Barrios M" },
  { nombre: "Pepito", apellido: "Maraca" },
  { nombre: "Junco", apellido: "Samoa" },
];
console.log(arreglo);
console.table(arreglo);
