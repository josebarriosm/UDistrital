//04/10/2023

// **************** OBJETOS EN TYPESCRIPT ----------------------

// Definición del objeto
let movie1 = {
  title: "Django Unchained",
  year: 2012,
};

console.log(movie1);

// Definición del objeto
let movie: {
  title: string;
  year: number;
};

// Asignación de un valor a un objeto
movie = {
  title: "La cascara",
  year: 2012,
};

console.log(movie);

movie = {
  title: "Pulp Fiction",
  year: 1990,
  //director: "QT", /** Genera error porque no cumple con la definción del objeto */
};

console.log(movie);

// **************** CLASS EN TYPESCRIPT ----------------------

// Definición de clase con valores por defectos (sin constructor)
// Todas las propiedades son públicas por defecto
class Training1 {
  type: string = "TRAINIG_RUN";
  distance: number = 0;
  date: string = "";
}

const t1 = new Training1();
console.log(t1);

// Definición de una clase con un constructor
class Training2 {
  type: string;
  distance: number;
  date: string;
  constructor(type: string, distance: number, date: string) {
    this.type = type;
    this.distance = distance;
    this.date = date;
  }
}

const t2 = new Training2("LONG RUN", 21, "2023-10-04");
console.log(t2);
const t3 = new Training2("SHORT RUN", 31, "2023-10-04");
console.log(t3);

// Clase con encapsulamiento
class Training3 {
  readonly type: string = "CARRERA DE RELEVOS";
  public distance: number = 0;
  public date: string = "";
  private _comments: string = ""; // esta propiedad no esta disponible por ser private
  // setter
  public set comments(comments: string) {
    this._comments = comments;
  }
  // getter
  public get comments(): string {
    return this._comments;
  }
}

const t5 = new Training3();
// Modifica los valores de las propiedades
//t5.type = "LONG RUN"; /** Genera error porque es de readonly y no se puede cambiar */
t5.distance = 25;
t5.date = "2023-10-01";
console.log(t5);

t5.comments = "Fue dura la carrera";
console.log(t5.comments);

// 09/10/2023
// Declaración de clase con constructor y atributos definidos en el constructor
// +++++-------- El profe recomienda hacer uso de esta declaración de la clase Training4
class Training4 {
  constructor(
    readonly type: string,
    public distance: number,
    public date: string,
    private _comments: string
  ) {}
}
 const t6 = new Training4("LONG RUNG", 32, "09/10/2023", "Good Training");
 console.log(t6);
 //t6.type = "CARRERA LARGA"; Este de igual manera genera error porque esta declarada como readOnly
 
