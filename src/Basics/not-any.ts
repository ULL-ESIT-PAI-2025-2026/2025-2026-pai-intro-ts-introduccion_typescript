/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc special-types.ts
 * This file demonstrates different special types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * @description Function that calculates a value based on whether the input is a string or a number.
 * @param value - The value to calculate, which can be a string or a number.
 * @returns A number that is either the length of the string or double the number.
 */
function calculate(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  }
  return (value * 2);
}


function main() {
  //calculate(true); // Compile-time error
  console.log(calculate('TypeScript')); // 10
  console.log(calculate(5));            // 10
}

main();
