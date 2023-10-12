// 04/10/2023

// Declaración de ENUM: Valores especificos para una variable
enum TrainignType {
  TRAINING_RUN, // Automáticamente este vale 0
  INTERVALS, // Automáticamente este vale 1
  LONG_RUN, // Automáticamente este vale 2
}

// Declaración de variable de tipo enum
let trainingType: TrainignType;

// Asignar valor DESCRIPTIVO a la variable
trainingType = TrainignType.LONG_RUN;
// Asignar valor NO DESCRIPTIVO a la variable
trainingType = 1; // Este valor no puede exceder del número total de variables, por ej: 3