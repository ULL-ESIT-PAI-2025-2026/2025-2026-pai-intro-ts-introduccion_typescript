/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc spread-operator.ts
 * This file demonstrates the use of the spread operator in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


function spreadOperatorExample(): void {
  let numbers1: number[] = [1, 2];
  let numbers2: number[] = [3, 4];

  let combined = [...numbers1, ...numbers2];
  console.log(combined);

  let user = { name: 'Ana', age: 25 };
  let copy = { ...user };

  console.log(copy);
}

spreadOperatorExample();
