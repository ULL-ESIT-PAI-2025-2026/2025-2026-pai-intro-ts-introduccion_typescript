/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc  style-guide.ts
 * This file contains examples of TypeScript code that follows best practices and style guidelines for better readability and maintainability.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * No Hungarian notation (not IUser) 
 */
interface User {
  id: number;
  name: string;
};


/**
 * Avoid 'any', use 'unknown' for better type safety.
 * @param value - The value to be printed, expected to be a string.
 */
function printUserName(value: unknown): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}


/**
 * Clean array syntax and explicit return type.
 * @param scores - An array of numbers representing scores.
 * @returns The average of the scores as a number.
 */
function average(scores: number[]): number {
  let total: number = 0;

  for (let score of scores) {
    total += score;
  }

  return (total / scores.length);
}


/**
 * Usage of the functions and interfaces defined above.
 * This section demonstrates how to create a User object and use the printUserName and average functions.
 */
const user: User = {
  id: 1,
  name: 'Cristóbal'
};

//printUserName(user.name);
//console.log(average([7, 8, 9]));

