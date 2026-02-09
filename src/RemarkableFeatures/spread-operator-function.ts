/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc spread-operator-function.ts
 * This file demonstrates the use of the spread operator in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * This function demonstrates the use of the spread operator in TypeScript.
 * @param numbers - A variable number of numeric arguments to be summed.
 * @returns The sum of the provided numbers.
 */
function sumNumbers(...numbers: number[]): number {
  let total: number = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

function enterPoint() {
  console.log(sumNumbers(1, 2, 3));        // 6
  console.log(sumNumbers(5, 10, 15, 20));  // 50
}

enterPoint();
