// Se declara un objeto
let objeto = {
  nombre: "José",
  correo: "josebarriosm@hotmail.com",
  edad: 45,
  hobbies: ["cine", "correr", "escuchar música"],
  esAdulto() {
    return this.edad >= 18;
  },
};
console.log(objeto);

// Obtener el valor de una variable del objeto con el punto seguido del objeto.
console.log(objeto.nombre);
// Obtener el valor de una variable con los corchetes seguido del nombre del objeto, asi: objeto["nombre"]
let n = objeto["correo"];
console.log(n);
console.log(objeto["edad"]);
// Acceso a un arreglo para obtener el valor de una propiedad dentro de un objeto
console.log(objeto.hobbies[2]);

// Recorre la propiedad hobbies que es un arreglo dentro de un objeto con un forEach
objeto.hobbies.forEach((hobby) => console.log(hobby));

console.log(objeto.esAdulto());

// Se declara un objeto: usuario
let band = "SF";
let direccion = "Calle 50 #85-42";
let usuario = {
  nombre: "Jose",
  email: "josebarriosm@hotmail.com",
  banda: band,
  direccion, // abreviación de la asignación de una variable a una propiedad
};
// Modifica el valor de una propiedad de un objeto
console.log(usuario);
usuario.nombre = "Claudia";
console.log(usuario);

// Si la propiedad no existe, la crea
usuario.ciudad = "Bogotá";
console.log(usuario);

// Elimina una propiedad de un objeto
delete usuario.direccion;
console.log(usuario);

// Verifica si una propiedad existe en un objeto y el resultado muestra true o false
let tieneCiudad = usuario.hasOwnProperty("Ciudad");
console.log(tieneCiudad);

// Se declara un objeto: ubicación
const ubicacion = {
  ciudad: "Medellín",
  departamento: "Antioquia",
  pais: "Colombia",
};

console.log(ubicacion);
// Bloque la modificación del objeto con freeze
Object.freeze(ubicacion);
ubicacion.ciudad = "Envigado";
console.log(ubicacion);
