// 09/10/2023

// Clase Padre
class Person {
  constructor(private firstname: string, private lastname: string) {}
  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
const person1: Person = new Person("Clark", "Kent");
console.log(person1.getFullName());

// Clase Hija - Teacher
class Teacher extends Person {
  constructor(firstname: string, lastname: string, public code: string) {
    super(firstname, lastname); // Se invoca las propiedades de la clase padre con super()
  }
}

// Instanciación de clase hija definiendo un objeto de clase hija
const teacher1: Teacher = new Teacher("Louise", "Lane", "001");
console.log(teacher1.getFullName());

// Instanciación de clase hija definiendo un objeto de clase padre
const teacher2: Person = new Teacher("Bruce", "Wayne", "002");
console.log(teacher2.getFullName());

// Clase Hija - Student
class Student extends Person {
  constructor(firstname: string, lastname: string, avg: number) {
    super(firstname, lastname);
  }
}

const student1: Student = new Student("Roy", "Logan", 3.2);
console.log(student1.getFullName());

const student2: Person = new Student("Berry", "Allen", 4.3);
console.log(student2.getFullName());

// Arreglo de objetos
const persons: Person[] = [];
persons.push(new Teacher("Arthur", "Curry", "003"));
persons.push(new Student("Slade", "Wilson", 4.8));
persons.push(new Teacher("Selina", "Kyle", "003"));
persons.push(new Student("Jason", "Todd", 3.5));
persons.push(new Student("Oliver", "Queen", 2.5));
persons.forEach((person) => console.log(person.getFullName()));
