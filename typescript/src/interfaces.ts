// Octubre 9 de 2023

interface ITraining {
  type: string;
  distance: number;
  format(): string;
}

// Objeto JSON
const objeto1: ITraining = {
  type: "INTERVALS",
  distance: 8,
  format(): string {
    return `WHATEVER`;
  },
};

class LongRunTraining1 implements ITraining {
  readonly type: string;
  constructor(public distance: number) {
    this.type = "LONG RUN";
  }
  format(): string {
    return `${this.type} para ${this.distance} kms`;
  }
}

class IntervalsTraining1 implements ITraining {
  readonly type: string;
  constructor(public distance: number, public amount: number) {
    this.type = "INTERVALS";
  }
  format(): string {
    return `${this.type} -> Distancia: ${this.distance} y cantidad: ${this.amount}`;
  }
}

class RuningTraining1 implements ITraining {
  readonly type: string;
  constructor(public distance: number, public date: string) {
    this.type = "RUNNING";
  }
  format(): string {
    return `${this.type} -> Distancia: ${this.distance} y fecha: ${this.date}`;
  }
}

// Intanciación de clases a partir de una interface
const entrenamiento1: ITraining = new LongRunTraining1(42);
const entrenamiento2: ITraining = new IntervalsTraining1(8, 5);
const  entrenamiento3: ITraining = new RuningTraining1(15, "09/10/2023");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);

const entrenamientos: ITraining[] = [
    entrenamiento1,
    entrenamiento2,
    entrenamiento3,
]

entrenamientos.forEach((e) => {
    console.log(e.format());    
});

const tbody1 = document.querySelector("#tbody")!;
entrenamientos.forEach((entrenamiento) => {
    const tr = document.createElement("tr");
    const tdType = document.createElement("td");
    const tdDistance = document.createElement("td");

    tdType.textContent = entrenamiento.type;
    tdDistance.textContent = `${entrenamiento.distance} kms`;
    tr.append(tdType, tdDistance);
    tbody1.append(tr);
})