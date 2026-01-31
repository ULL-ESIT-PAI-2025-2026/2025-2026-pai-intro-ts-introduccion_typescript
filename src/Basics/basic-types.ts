/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc basic-types.ts
 * This file demonstrates differents basics types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * @description Function that demonstrates basic types in TypeScript.
 * It declares variables of type string, number, and boolean, and prints them to the console.
 * @returns void
 */
export function main(): void {
  let myName: string = 'Cristóbal Jesús Sarmiento Rodríguez';
  let myAge: number = 22;
  let isStudent: boolean = true;
  console.log(`Name: ${myName}, Age: ${myAge}, Is Student: ${isStudent}`);
}

main();
